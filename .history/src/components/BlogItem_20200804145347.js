import React from 'react'

const BlogItem = (props) => {
  const { title, author, subject, article, onDelete, objectId } = props.blog;

  return (
    <div>
      <div className='ui card' style={{ width: '75%', padding: '20px' }}>
    
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
          onDelete(objectId);
        }}>Delete
        </button>
      </div>
      </div>
    </div>
  )
};

export default BlogItem;