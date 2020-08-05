import React from 'react'


const Button = ({className, onClick, }) => {

  return (
    <div>
    <button 
      type={}
    className='ui primary button' 
        style={{ margin: '10px 15px'}}
        onClick={() => {
          props.onDelete(objectId);
        }}>Delete
        </button>
    </div>

  )
};

export default Button;