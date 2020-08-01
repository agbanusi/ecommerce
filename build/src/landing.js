import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import logo from './logo.svg'
import './landing.css'

export default class Landing extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            passsword:'',
            redirect:false,
            id:''
        }
    }
    handleChange=(e)=>{
        // eslint-disable-next-line 
        if(e.target.id =='email'){
            this.setState({email:e.target.value})
        }
        // eslint-disable-next-line
        else if(e.target.id=='password'){
            this.setState({password:e.target.value})
        }
    }
    submit =(e)=>{
        let {email,password}=this.state
        console.log(email)
        fetch('/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})}).then(res=>res.json()).then(data=>{
            // eslint-disable-next-line 
            if(data.id =='Failed'){
                document.getElementById('notify').innerHTML="Email or Password is wrong"
            }else{
                this.setState({redirect: true, id:data.id}) 
            }
        })
    }
    register=()=>{
        this.setState({redirect: true})
    }
    render() {
        // eslint-disable-next-line
        if(this.state.redirect && this.state.id==''){
            return <Redirect to='/registration' />
        }
        else if(this.state.redirect){
            return <Redirect to={'/shop?id='+this.state.id} />
        }
        return (
            <div>
              <div className='nav'>
                <h2>Welcome to E-Shop</h2>
                <nav>
                    <a className='done' href='#log'>Log in</a>
                    <a className='done' href='/registration'>Register</a>
                </nav>
              </div>
              <div className='main'>
                <div className='top'><img alt='logo' className="log" src={logo} /></div>
                <div className='bottom'>
                    <div className='left'>
                        <h1>YOU ASK WE DELIVER.</h1>
                        <h5> Get the best of your accessories here, at the cheapest of prices and guess what we also
                        have discount coming up soon enough. Logotech, your one stop shop you can always count on for automotives.
                        </h5>
                        <button className='shoppered' href='#log'>SHOP NOW</button>
                    </div>
                    <div className='right'>
                        <div className='cover'>
                            <div className='svg'>
                            {this.props.svg}
                            </div>  
                        </div>
                    </div>
                </div>
              </div>
              <div className='form'>
                <form id='log' >
                  <h2>Login Form</h2>
                  <p id='notify' style={{color:'red'}}></p>
                  <div>Email: <input id='email' value={this.state.email} onChange={this.handleChange} required /></div>
                  <div>Password: <input id='password' type='password' value={this.state.password} onChange={this.handleChange}/></div>
                  <div id='div'>
                    <button className='but' id='sign' type='button' onClick={this.submit}> Sign In</button>
                    <button className='but' type='button' id='reg' onClick={this.register}>Register</button>
                  </div>
                </form>
              </div>  
            </div>
        )
    }
}
