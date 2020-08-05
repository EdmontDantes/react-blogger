import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
const BlogItem = (props) => {
  const { title, author, subject, article, objectId } = props.blog;

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
        <Button className='ui primary button' 
        onClick={() => {
          props.onDelete(objectId);
        }}>Delete
        </Button>
        <Button className='ui warning button'
        onClick = {() => {
          props.onUpdate(objectId);
        }}>Update</Button>
      </div>
      </div>
    </div>
  )
};

export default BlogItem;

