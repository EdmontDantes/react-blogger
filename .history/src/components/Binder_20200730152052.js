import React, {Component} from 'react'

class Binder extends Component {
  // constructor() {
  //   super();
  //   // this.handleClickMe = this.handleClickMe.bind(this)
  // }
  
  state = {
    
    visibility: "hidden"
  };
  handleClickMe =() => {
    
    
    if(this.state.visibility === "hidden") {
      this.state.visibility = 'visible'  
    } else if(this.state.visibility === 'visible'  ) {
      
    }

    this.setState ()
  }

  render(){
    
    return (
      <div>
      <h1 style={this.state} >I can See you Now</h1> 
      <button className='ui primary button' style={{ margin: '10px 15px' }} onClick={
        this.handleClickMe}>Delete</button>

    </div>

    ) 
    

  }
}


export default Binder;