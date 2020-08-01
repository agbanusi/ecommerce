import React, { Component } from 'react';
import  Logo1 from './assets/cart3.svg'
import  Logo2 from './assets/tablet.svg'
import  Logo3 from './assets/console.svg'
import  Logo4 from './assets/headphones.svg'
import  Logo5 from './assets/online-shop.svg'
import  Logo6 from './assets/responsive.svg'
import  Logo7 from './assets/shopping.svg'
import  Logo8 from './assets/smartwatch.svg'
import  Logo9 from './assets/tablet.svg'
import  Logo10 from './assets/tv-monitor.svg'
import Landing from './landing'

//get the list of logos to use
var list=[< img className='logose' src={Logo1} />,<img className='logose' src={Logo2} />, <img className='logose' src={Logo3} />,
<img className='logose' src={Logo4} />,<img className='logose' src={Logo5} />,<img className='logose'src={Logo6} />,
<img className='logose' src={Logo7} />,<img className='logose' src={Logo8} />,<img className='logose' src={Logo9} />,<img className='logose' src={Logo10} />]

class images extends Component {
  constructor(props){
    super(props);
    this.state={
      ind:0
    }
  }
  componentDidMount(){
    this.interval=setInterval(()=>{
      this.setState({ind:Math.round(Math.random()*9)})
    },5000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>
        <Landing  svg={list[this.state.ind]} />
      </div>
    );
  }
}

export default images;
