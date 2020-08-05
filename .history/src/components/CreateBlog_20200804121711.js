import React, {Component} from 'react'



class CreateBlog extends Component{
  constructor(){
    super()
    this.state={
      blog: {title: '', author: '', subject: '', article: '', objectId: Date.now() },

    }
  }

  handleChange = (event) => {
    let updatedBlog = { ...this.state.blog };
    updatedBlog[event.target.name] = event.target.value;
    this.setState({
      blog: updatedBlog
    }, () => {
      console.log(updatedBlog);
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let emptyBlog = {title:'', author:'', subject:'', article:'', objectId: Date.now()}
    let updatedBlogs = [ ...this.state.blogs ];
    updatedBlogs.unshift(this.state.blog);


    this.setState({
      blog: emptyBlog,
      blogs: updatedBlogs
    }, () => {
      console.log(this.state)

    })

  };

  render(){
    return(
      <div style={{ paddingLeft: '30px', width: '100%' }}>
      <h1>Create Blog:</h1>
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="equal width fields" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '50%'}}>
            <div className="field">
              <label htmlFor="title">Title:</label>
              <div className="ui fluid input">
                <input type="text" name="title" onChange={this.handleChange} value={this.state.blog.title} />
              </div>
            </div>
            <div className="field">
            <label htmlFor="author">Author:</label>
            <div className="ui fluid input">
              <input type="text" name="author" onChange={this.handleChange} value={this.state.blog.author}  />
            </div>
          </div>
          <div className="field">
          <label htmlFor="subject">Subject:</label>
          <div className="ui fluid input">
            <input type="text" name="subject" onChange={this.handleChange} value={this.state.blog.subject} />
          </div>
        </div>
        <div className="field">
        <label htmlFor="article">Article:</label>
        <div className="ui fluid input">
          <textarea type="text" name="article" id='article'  cols='30' rows='10' style={{whiteSpace: 'pre-wrap'}} onChange={this.handleChange} value={this.state.blog.article} ></textarea>
        </div>
        </div>
      </div>
      <div className="field">
        <button type="submit" className='ui button green'>Submit</button>
      </div>
    </form>
        {/*<hr />
        {this.state.blogs.map(({objectId, author, subject, article, title }, idx) => {
          return (
            <div key={objectId} className='ui card' style={{ width: '75%', padding: '20px' }}>
            
              <div className='content'>
                <div className='header'>{title}</div>
                <br />
                <div className='meta'>Author: {author}</div>
                <br />
                <div className='meta'>Subject: {subject}</div>
                <hr />
                <div className='description'>{article}</div>
              </div>

              <div> 
                <button className='ui primary button' 
                style={{ margin: '10px 15px'}}
                onClick={() => {
                  this.onDelete(objectId);
                }}>Delete
                </button>
              </div>
            </div>
          );
        })} */}
      </div>
    )
  }
}
export default CreateBlog;