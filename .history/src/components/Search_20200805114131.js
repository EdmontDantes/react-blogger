import React from 'react'

const Search = (props) => {
  return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '40px'}}>
      <h2>Search Blog by Subject:</h2>
      <form action="" className="ui form">
      <div className="field">
        <input type='text' placeholder='Search by subject' onChange={props.handleChange} value={props.searchTerm} />
      </div>
    </form>
    </div>

  ) 
};

export default Search

Blogs.propTypes = {
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
      objectId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.symbol,
        PropTypes.number
      ]).isRequired
    })
  ),
  searchTerm: PropTypes.string
}