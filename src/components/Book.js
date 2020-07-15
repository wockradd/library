import React from 'react'

const Book = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.author}</p>
        <button 
                onClick={()=>{
                  alert("hi")
                }}>Checkout</button>
      </div>
    )
  }

export default Book
