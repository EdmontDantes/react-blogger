import React from 'react'

const Search = (props) => {
  return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '40px'}}>
      <h2>Search Blog by Subject:</h2>
      <form action="" className="ui form">
      <div className="field">
        <input type='text' placeholder='Search by subject' onChange={this.handleChange} value={this.state.searchTerm} />
      </div>
    </form>
    </div>

  ) 
};

export default Search