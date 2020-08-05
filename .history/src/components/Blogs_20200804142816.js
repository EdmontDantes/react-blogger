import React from 'react'
import searchIt from '../services/searchit'


const Blogs = (props) => {


  return(
    <div style={{marginLeft: '100px', width: '100%'}}>
    <h2>Blogs</h2>
    {this.state.blogs.filter(searchIt(props.searchTerm)).map(({objectId, author, subject, article, title }, idx) => {
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
                      props.onDelete(objectId);
                    }}>Delete
                    </button>
                  </div>
                </div>
              );
            })}
    
    </div>


  )


}

export default Blogs;