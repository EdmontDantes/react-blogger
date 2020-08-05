import React, {Component} from 'react'



class Form extends Component{
  constructor(){
    super()
    this.state={
      blog: {title: '', author: '', subject: '', article: ''},
      blogs: []
    }
  }



  render(){
    return(
      <div style={{ margin: '40px' }}>
        <form action="" className="ui form">
          <div className="equal width fields"></div>
        </form>
        
      </div>
    )
  }
}
export default Form