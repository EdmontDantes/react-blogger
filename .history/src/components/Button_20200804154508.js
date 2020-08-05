import React from 'react'


const Button = ({className, onClick, type}) => {

  return (
    <div>
    <button 
      type={type}
    className={className}
        style={{ margin: '10px 15px'}}
        onClick={onClick}>{props.children}
        </button>
    </div>

  )
};

export default Button;