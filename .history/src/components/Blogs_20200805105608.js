import React from 'react'
import searchIt from '../services/searchit'
import BlogItem from './BlogItem'
// import searchIt from '../services/searchit'
import PropTypes from 'prop-types'

const Blogs = (props) => {


  return(
    <div style={{marginLeft: '100px', width: '100%'}}>
    <h2>Blogs</h2>
    {props.blogs.filter(searchIt(props.searchTerm)).map((blog) => {
      // const {objectId, author, subject, article, title } = blog;
              return (
                <BlogItem key={blog.objectId} blog={blog} onDelete={props.onDelete} />
 
              );
            })}
    
    </div>


  )


}

export default Blogs;

Blogs.propTypes = {
  onDelete: PropTypes.func,
  blogs: PropType
}