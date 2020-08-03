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
    <div>I can </div> 
  }

  render(){
    
    return (

      <button className='ui primary button' style={{ margin: '10px 15px' }} onClick={() => {
        this.handleClickMe('Hello HandleClickMe')}}>Delete</button>

      

    ) 
    

  }
}


export default Binder;