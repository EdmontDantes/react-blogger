import React from 'react'


const Button = ({className, onClick, type}) => {

  return (
    <div>
    <button 
      type={type}
    className={styl}
        style={{ margin: '10px 15px'}}
        onClick={() => {
          props.onDelete(objectId);
        }}>Delete
        </button>
    </div>

  )
};

export default Button;