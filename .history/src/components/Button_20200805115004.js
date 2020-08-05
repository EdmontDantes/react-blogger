import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const {className, onClick, type, children} = props;
  return (
    <div>
    <button 
      type={type}
    className={className}
        style={{ margin: '10px 15px'}}
        onClick={onClick}>{children}
        </button>
    </div>

  )
};

export default Button;


Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,

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