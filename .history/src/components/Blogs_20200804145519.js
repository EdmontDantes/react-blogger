import React from 'react'
import searchIt from '../services/searchit'
import BlogItem from './BlogItem'
import { findAllByTitle } from '@testing-library/react'


const Blogs = (props) => {


  return(
    <div style={{marginLeft: '100px', width: '100%'}}>
    <h2>Blogs</h2>
    {props.blogs.filter(searchIt(props.searchTerm)).map((blog, idx) => {
      const {objectId, author, subject, article, title } = blog;
              return (
                <BlogItem blog={blog} onDelete={props.} />
 
              );
            })}
    
    </div>


  )


}

export default Blogs;