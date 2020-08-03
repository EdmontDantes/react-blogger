import React, {Component} from 'react'

class Binder extends Component {
  constructor() {
    super();
    this.state = {
      style: ""
    };
    // this.handleClickMe = this.handleClickMe.bind(this)
  }

  handleClickMe =() => {
    this.setState
  }

  render(){
    
    return (
      <h1 style="display: hidden">I can See you Now</h1> 
      <button className='ui primary button' style={{ margin: '10px 15px' }} onClick={() => {
        this.handleClickMe('Hello HandleClickMe')}}>Delete</button>

      

    ) 
    

  }
}


export default Binder;