import React, {Component} from 'react'

class Binder extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Hello State'
    };

  }

  

  render(){
    
    return (

      <button className='ui primary button' style={{ margin: '10px 15px' }} onClick={this.handleClickMe}>Delete</button>

    ) 
    

  }
}


export default Binder;