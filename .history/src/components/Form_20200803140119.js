import React, {Component} from 'react'



class Form extends Component{
  constructor(){
    super()
    this.state={
      blog: {title: '', author: '', subject: '', article: ''},
      blogs: []
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
  }

  render(){
    return(
      <div style={{ margin: '40px' }}>
        <form action="" className="ui form">
          <div className="equal width fields" style={{ display: 'flex', flex}}>
            <div className="field">
              <label htmlFor="title">Title:</label>
              <div className="ui fluid input">
                <input type="text" name="title" onChange={this.handleChange} />
              </div>
            </div>
            <div className="field">
            <label htmlFor="author">Author:</label>
            <div className="ui fluid input">
              <input type="text" name="author" onChange={this.handleChange} />
            </div>
          </div>
          <div className="field">
          <label htmlFor="subject">Subject:</label>
          <div className="ui fluid input">
            <input type="text" name="subject" onChange={this.handleChange} />
          </div>
        </div>
        <div className="field">
        <label htmlFor="article">Article:</label>
        <div className="ui fluid input">
          <input type="text" name="article" onChange={this.handleChange} />
        </div>
      </div>
          </div>
        </form>
        
      </div>
    )
  }
}
export default Form