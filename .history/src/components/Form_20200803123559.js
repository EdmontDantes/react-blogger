import React, {Component} from 'react'



class Form extends Component{
  constructor(){
    super()
    this.state={
      blog:{title: '', author: '', subject: '', article: ''}
      
    }
  }



  render(){
    return(
      <div>
        Form VOODOO FORM
      </div>
    )
  }
}
export default Form