import React from 'react'

const Book = (props) => {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>By {props.author}</p>
        <p>Quantity: {props.quantity}</p>
        <button 
            onClick={()=>{
            alert("You tried to checkout '" + props.title + "'")
            }}>Checkout Book</button>
      </div>
    )
  }

export default Book
