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
    console.log(text); 
  }

  render(){
    
    return (

      <button className='ui primary button' style={{ margin: '10px 15px' }} onClick={this.handleClickMe(hello)}>Delete</button>

    ) 
    

  }
}


export default Binder;