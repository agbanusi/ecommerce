import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import './profile.css'

var ident
export default class profile extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            redirect:false
        }
        this.handleFile=this.handleFile.bind(this)
    }
    componentDidMount(){
        ident=this.getUrlParameter('id')
        console.log(ident)
        fetch('/upload',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:ident})}).then(res=>res.json()).then(data=>{
            if(data.status !=='Failed'){
                console.log(data.status)
                if(!data.status.pic){
                    try{
                        document.getElementById('profile').src=URL.createObjectURL(data.status.pic)
                    }catch(err){
                        console.log('no picture found')
                    }
                }
                
                this.setState({name:data.status.firstName+' '+data.status.lastName, email:data.status.email})
            }
            
        })
    }
    handleFile(e){
        console.log('here')
        if(e.target.files && e.target.files[0]){
            let t=URL.createObjectURL(e.target.files[0])
            let formData  = new FormData();
            formData.append('pic',e.target.files[0])
            document.getElementById('profile').src=t
            fetch('/upload?id='+ident,{method:'POST',body:formData}).then(res=>res.json()).then(data=>{
                // eslint-disable-next-line
                console.log('done')
            })
            
        }
    }
    getUrlParameter=(name)=>{
        // eslint-disable-next-line
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    backer=()=>{
        this.setState({redirect:true})
    }
    render() {
        if(this.state.redirect){
            return <Redirect to={'/shop?id='+ident} />
        }
        return (
            <div className='body'>
                <div className='returner'><button onClick={this.backer} >Shop</button></div>
                <div className='bombom'>
                <div id='upload' >
                    <img id='profile' className='profile' src='#' alt='your profile' />
                    <i className="fa fa-camera file" aria-hidden="true"><input className='filer' type='file' id='file' placeholder='Upload' onChange={this.handleFile} /></i>
                </div>
                <hr id='idk'/>
                <h1 id='name'>{this.state.name}</h1>
                <h3>{this.state.email}</h3>
                </div>
            </div>
        )
    }
}
