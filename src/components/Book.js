import React from 'react'

const Book = (props) => {
    

    
    
    return (
        <div>
            <h2>{props.title}</h2>
            <p>By {props.author}</p>
            <p>Quantity: {props.quantity}</p>
            <button
                disabled = {props.quantity <= 0}   
                onClick = {
                    e=>{
                        props.onClick({"title":props.title,"author":props.author,"quantity":props.quantity})
                    }
                }>
                Checkout Book
            </button>
        </div>
    )

  }

export default Book
