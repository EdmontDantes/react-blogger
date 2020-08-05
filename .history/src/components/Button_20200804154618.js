import React from 'react'


const Button = ({className, onClick, type, children}) => {

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