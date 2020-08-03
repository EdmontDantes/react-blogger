import React, {Component} from 'react'

class Binder extends Component {
  constructor() {
    super();
    // this.handleClickMe = this.handleClickMe.bind(this)
  }
  
  state = {
    display: "hidden"
  };
  handleClickMe =() => {
    let newStyle = {
      display: ""
    }
    this.setState ({
      display: newStyle
    })
  }

  render(){
    
    return (
      <div>
      <h1 style={this.state.display} >I can See you Now</h1> 
      <button className='ui primary button' style={{ margin: '10px 15px' }} onClick={() => {
        this.handleClickMe('Hello HandleClickMe')}}>Delete</button>

    </div>

    ) 
    

  }
}


export default Binder;