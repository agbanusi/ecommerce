import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './welcome.css'

//the class is defaultly exported for use and access
export default class welcome extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            passwords:'',
            redirect:false,
            id:''
        }
    }
    //handle submit request
    handleSubmit=(e)=>{
        e.preventDefault()
        let {firstName, lastName, email, password, password2}=this.state
        // eslint-disable-next-line
        if(email ==="" || password==="" || firstName==="" || lastName==""){
            document.getElementById('notify').innerHTML="Required fields need to be filled"
        }
        // eslint-disable-next-line
        if(password==password2){
            fetch('/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({firstName, lastName, email, password})}).then(res=>res.json()).then(data=>{
                // eslint-disable-next-line
                if(data.id=='Failed'){
                    document.getElementById('notify').innerHTML="You have already registered"
                }
                else{
                    console.log(data.id, data)
                    this.setState({redirect:true, id:data.id})
                }
            })
        }
        else{
            document.getElementById('notify').style.opacity=1
        }
    }
    //handles all changes in all inputs by using the switch statement and then change the state
    handleChange=(e)=>{
        switch(e.target.id){
            case 'firstName':
                this.setState({firstName:e.target.value})
                break;
            case 'lastName':
                this.setState({lastName:e.target.value})
                break;
            case 'email':
                this.setState({email:e.target.value})
                break;
            case 'password':
                this.setState({password:e.target.value})
                break;
            case 'password2':
                this.setState({password2:e.target.value})
                if(this.state.password !== e.target.value){
                    document.getElementById('notify').style.opacity=1
                }
                else{
                    document.getElementById('notify').style.opacity=0
                }
                break;
            default:
                break;

        }
    }
    render() {
        if(this.state.redirect){
            return <Redirect to={'/shop?id='+this.state.id} />
        }
        return (
            <div className='welcome'>
                <div className='navy'>
                    <h2>Welcome to E-Shop</h2>
                    <nav>
                        <a href='/'>Log in</a>
                    </nav>
                </div>
                <form className='former' onSubmit={this.handleSubmit}>
                    <div>
                        <h5>First Name</h5>
                        <input id='firstName' placeholder='Enter your First Name' value={this.state.firstName} onChange={this.handleChange} required/>
                        <h5>Last Name</h5>
                        <input id='lastName' placeholder='Enter your Last Name' value={this.state.lastName} onChange={this.handleChange} required/>
                        <h5>Email Address</h5>
                        <input id='email' placeholder='Enter your Email Address' value={this.state.email} onChange={this.handleChange} required/>
                        <h5>Password</h5>
                        <input id='password' placeholder='Enter your password' type='password' value={this.state.password} onChange={this.handleChange} required/>
                        <p id='notify' style={{opacity:0, color:'red'}}>The passwords do not match.</p>
                        <h5>Retype Password</h5>
                        <input id='password2' placeholder='Re-type your password' type='password' value={this.state.password2} onChange={this.handleChange} required/>
                        <h5> By clicking on Sign Up, you agree to the terms and conditions and privacy settings. </h5>
                        <button id='but' type='submit'>Sign Up</button>
                    </div>  
                </form>
            </div>
        )
    }
}
