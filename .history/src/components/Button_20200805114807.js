import React from 'react'
import Pro

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

