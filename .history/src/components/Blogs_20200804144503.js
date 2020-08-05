import React from 'react'
import searchIt from '../services/searchit'
import BlogItem from './BlogItem'


const Blogs = (props) => {


  return(
    <div style={{marginLeft: '100px', width: '100%'}}>
    <h2>Blogs</h2>
    {props.blogs.filter(searchIt(props.searchTerm)).map(({objectId, author, subject, article, title }, idx) => {
              return (
                <BlogItem />
 
              );
            })}
    
    </div>


  )


}

export default Blogs;