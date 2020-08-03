import React, {Component} from 'react'

class Binder extends Component {
  constructor() {
    super();
    // this.handleClickMe = this.handleClickMe.bind(this)
    state = {
      display: "hidden"
    };
  }

  handleClickMe =() => {
    let newStyle = "initial"
    this.setState ({
      display: newStyle
    })
  }

  render(){
    
    return (
      <div style={this.state.display} >I can See you Now</div> 
      <button className='ui primary button' style={{ margin: '10px 15px' }} onClick={() => {
        this.handleClickMe('Hello HandleClickMe')}}>Delete</button>

      

    ) 
    

  }
}


export default Binder;