import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import img1 from './assets/OAYTMM0.jpg'
import img2 from './assets/OSO1XY0.jpg'
import img3 from './assets/photo-of-a-macbook-air-812264.jpg'
import img4 from './assets/semi-opened-laptop-computer-turned-on-on-table-2047905.jpg'
import img5 from './assets/space-gray-iphone-5s-1294886.jpg'
import img6 from './assets/web-site.png'
import img7 from './assets/black-corded-headset-205926.jpg'
import img8 from './assets/engine-505489_640.jpg'
import img9 from './assets/spark-plug-32083_640.png'
import img10 from './assets/transport-3366391_640.jpg'
import img11 from './assets/candle-3992363_640.jpg'
import img12 from './assets/caps-1937013_640.jpg'
import img13 from './assets/automobile-958185_640.jpg'
import img14 from './assets/rim-2971142_640.jpg'
import './shop.css'

var img=[img8,img9,img10,img11,img12,img13,img14,img1,img2,img3,img4,img5,img6,img7]
var price=['1,850,000NGN','20,000NGN','150,000NGN','18,000NGN','240,000NGN','1,250,000NGN','300,000NGN','100,000NGN','150,000NGN','800,000NGN','500,000NGN','300,000NGN','50,000NGN','60,000NGN']
var des = ['lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum','lorem ispum lorem ispum lorem ispum adith lorem ispum lorem ispum',
'lorem ispum lorem ispum lorem ispum adith lorem ispum lorem ispum','lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum','lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum',
'lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum','lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum','lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum',
'lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum','lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum','lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum',
'lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum','lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum','lorem ispum lorem ispum, lorem ispum adith lorem ispum lorem ispum']
var ident
export default class shop extends Component {
    constructor(props){
        super(props);
        this.state={
            cart:[],
            redirect:false,
            identity:''
        }
    }
    componentDidMount(){
        ident=this.getUrlParameter('id')
        this.getName(ident)
        this.setState({identity:ident})
        console.log(ident)
    }
    getUrlParameter=(name)=>{
        // eslint-disable-next-line
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    getName=(id)=>{
        fetch('/namers',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:id}) }).then(res=>res.json()).then(data=>{
            if(data.id!=='Failed'){
                this.setState({cart:data.cart})
                document.getElementById('messy').innerHTML="Welcome "+data.firstName
            }
        })
    }
    add=(item,id)=>{
        if(!this.state.cart.includes(id)){
            fetch('/cart',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({item:item,id:ident})}).then(res=>res.json()).then(data=>{
                // eslint-disable-next-line
                if(data.status=='success'){
                    document.getElementById('mess').innerHTML='Added to Cart'
                    this.setState({cart:[...this.state.cart,id]})
                    
                }
                else{
                    document.getElementById('mess').innerHTML="Try Again"
                }
            })
        }
        else{
            document.getElementById('mess').innerHTML='Already added to Cart.'
        }
        
    }
    cart=()=>{
        this.setState({redirect:true})
    }
    render() {
        if(this.state.redirect){
            return <Redirect to={'/checkout?id='+ident} />
        }
        return (
            <div className='total'>
                <div className='head'>
                
                <div className='butonn'>
                <p className='cart'>{this.state.cart.length}</p>
                <p className='homer' onClick={this.cart}>🛒</p>
                </div>
                <button className='home buton'><a href='/'>Home</a></button>
                <button className='home buton'><a href={'/profile?id='+ident}>Profile</a></button>
                </div>
                <h1 id='messy'></h1>
                <h5 id='mess'> </h5>
                <div className='bodyLin'>
                    {img.map((i,k)=>{
                    return(<div id={k} key={k} className='show'>
                            <img className='display' src={i}  alt='logo' />
                            <h2 className='price'>{price[k]}</h2>
                            <p  className='describe'>{des[k]}</p>
                            <button id='hover' onClick={()=>{this.add({'path':i,'price':price[k],'content':des[k]},k)}}>BUY NOW</button>
                        </div>)
                    })}
                </div>
                <footer class='footer'>
                <div class='media'>
                <i class="fa fa-facebook-official" aria-hidden="true"><a href='facebook' /></i>
                <i class="fa fa-whatsapp" aria-hidden="true"><a href='whatsapp' /></i>
                <i class="fa fa-twitter" aria-hidden="true"><a href='twitter' /></i>
                <i class="fa fa-instagram" aria-hidden="true"><a href='instagram' /></i>
                </div>
                <p>© Agbanusi John</p>
                </footer>
            </div>
        )
    }
}
