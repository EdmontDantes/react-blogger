import React, {Component, Fragment} from 'react'
import Header from './Header'
import Search from './Search'
import blogs from '../data/data'
import CreateBlog from './CreateBlog'


// function searchIt(term) {
//   return function(item){
//     return item.subject.toLowerCase().includes(term.toLowerCase())
//   }
// }

let searchIt = (term) => (item) =>
  item.subject.toLowerCase().includes(term.toLowerCase())


  class App extends Component {
  // constructor() {
  //   super()
  //   this.state={
  //     blogs:blogs
  //   }
  //   // this.onDelete = this.onDelete.bind(this);
  // }
  state = {
    blogs, searchTerm: ''
  }

  onDelete = (id) => {
    const updatedBlog = this.state.blogs.filter((item) => item.objectId !== id);
    
    this.setState({
      blogs: updatedBlog
    })
    console.log(`Delete ${id}`);
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => {
      
      console.log(this.state.searchTerm);
    })  
  }

  render() {
    return (
      <Fragment>
      <Header />
      <div 
      style={{
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
      >
      <div style={{width: '100%'}}>
      <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
      <hr />
      <CreateBlog />
      </div>

      {/*<form action="" className="ui form">
      <div className="field">
        <input type='text' placeholder='Search by subject' onChange={this.handleChange} value={this.state.searchTerm} />
      </div>
    </form> */}


        {this.state.blogs.filter(searchIt(this.state.searchTerm)).map(({objectId, author, subject, article, title }, idx) => {
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
        })}
      </div>
      </Fragment>
    );
  }
}

export default App;