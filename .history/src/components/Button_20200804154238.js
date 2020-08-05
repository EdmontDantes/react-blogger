import React from 'react'


const Button = () => {

  return (
    <div>
    <button className='ui primary button' 
        style={{ margin: '10px 15px'}}
        onClick={() => {
          props.onDelete(objectId);
        }}>Delete
        </button>
    </div>

  )
};

export default Button;