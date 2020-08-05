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
          <div className="equal width fields">
            <div className="field-dark">
              <label htmlFor="title">Author:</label>
              <div className="ui fluid input">
                <input type="text" name="author" onChange={this.handleChange} />
              </div>
            </div>
            <div className="field-dark">
            <label htmlFor="author">Author:</label>
            <div className="ui fluid input">
              <input type="text" name="author" onChange={this.handleChange} />
            </div>
          </div>
          <div className="field-dark">
          <label htmlFor="author">Author:</label>
          <div className="ui fluid input">
            <input type="text" name="author" onChange={this.handleChange} />
          </div>
        </div>
        <div className="field-dark">
        <label htmlFor="author">Author:</label>
        <div className="ui fluid input">
          <input type="text" name="author" onChange={this.handleChange} />
        </div>
      </div>
          </div>
        </form>
        
      </div>
    )
  }
}
export default Form