import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './check.css'
//,"proxy": "http://localhost:5000"
var ident
export default class check extends Component {
    constructor(props){
        super(props);
        this.state={
            a:'•',
            b:'•',
            c:'•',
            d:'•',
            name:'FirstName LastName',
            number:'',
            date:'00/00',
            cvv:'',
            items:[],
            redirect:false
        }
    }
    componentDidMount(){
        ident=this.getUrlParameter('id')
        this.learn(ident)
            
    }
    learn=(id)=>{
        fetch('/checkIn',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:id})}).then(res=>res.json()).then(data=>{
            if(data.id !=='Failed'){
                this.setState({items:data.items})
            }
            else{
                document.getElementById('tell').innerHTML='Failed to Load Cart, please reload page.'
            }
            
        })
    }
    getUrlParameter=(name)=>{
        // eslint-disable-next-line
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    handleSubmit =()=>{
        let ti=document.getElementById('tell')
        ti.style.color='red'
        ti.style.marginLeft='40vw'
        ti.innerHTML="This is a test site only."
        setTimeout(()=>{ti.innerHTML=""},5000)

    }
    handleChange=(e)=>{
        switch(e.target.id){
            case 'name':
                this.setState({'name':e.target.value})
                break;
            case 'number':
                this.setState({'number':e.target.value})
                //
                
                switch(e.target.value.length){
                    case 13:
                        console.log((e.target.value).split('')[12])
                        this.setState({'a':(e.target.value).split('')[12]})
                        break;
                    case 14:
                        this.setState({'b':(e.target.value).split('')[13]})
                        break;
                    case 15:
                        this.setState({'c':(e.target.value).split('')[14]})
                        break;
                    case 16:
                        this.setState({'d':(e.target.value).split('')[15]})
                        break;
                    default:
                        break;
                }
                break;
            case 'date':
                this.setState({'date':e.target.value})
                break;
            case 'cvv':
                this.setState({'cvv':e.target.value})
                break;
            default:
                this.setState({'name':e.target.value})
        }
    }
    back=()=>{
        this.setState({redirect:true})
    }
    render() {
        if(this.state.redirect){
            return <Redirect to={'/shop?id='+ident} />
        }
        return (
            <div className='join'>
                <p id='tell'></p>
                <div className='divide'>
                    <div className='cat'>
                        {this.state.items.map(i=>(
                            <div className='seen'>
                            <img className='deen' src={i.path} />
                            <p>{i.content}</p>
                            <h5>{i.price}</h5>
                            </div>)
                        )}
                        <div className='biggy'><button className='shop' onClick={this.back}>Back</button> <h3>Sub-Total: {this.state.items.map(i=>Number(i.price.replace(',','').slice(0,-3))).reduce((acc,value)=>acc+value,0)}</h3></div>
                    </div>
                    <div className='card'>
                        <h3>Checkout</h3>
                        <div className='showCard'>
                            <h3 className='tie'>Master Card</h3>
                            <h4 className='cardName'>{this.state.name}</h4>
                            <h3 className='mainImp'>•••• •••• •••• {this.state.a}{this.state.b}{this.state.c}{this.state.d}</h3>
                            <p className='last'>{this.state.date}</p>
                        </div>
                        <form >
                            <p className='ink'>Full Name</p>
                            <input className='downer' id='name' onChange={this.handleChange} value={this.state.name} required />
                            <p className='ink'>Card Number</p>
                            <input className='downer' id='number' maxlength="16"  onChange={this.handleChange} value={this.state.number} required />
                            <div className='share'>
                                <div><p className='ink'>Expiry Date</p><input class='downer' id='date' onChange={this.handleChange} value={this.state.date} required /></div>
                                <div><p className='ink'>CVV</p><input class='downer' minlength="3" maxlength="4"  id='cvv'  onChange={this.handleChange} value={this.state.cvv} required /></div>
                            </div>
                            <button type='button' className='finally' onClick={this.handleSubmit}>Checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
