import React, {Component} from 'react'

class Binder extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Hello State'
    };
    // this.handleClickMe = this.handleClickMe.bind(this)
  }

  handleClickMe =(text) => {
    <h1>I can See you Now</h1> 
  }

  render(){
    
    return (

      <button className='ui primary button' style={{ margin: '10px 15px' }} onClick={() => {
        this.handleClickMe('Hello HandleClickMe')}}>Delete</button>

      

    ) 
    

  }
}


export default Binder;