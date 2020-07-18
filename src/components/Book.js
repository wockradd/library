import React from 'react'

const Book = (props) => {
    

    
    
    return (
        <div  className='centered'>
            <h3>{props.title}</h3>
            <p>By {props.author}</p>
            <p>Quantity: {props.quantity}</p>
            <button
                className='prettyInput'
                disabled = {props.quantity <= 0}   
                onClick = {
                    e=>{
                        props.onClick({"title":props.title,"author":props.author,"quantity":props.quantity})
                    }
                }
            >
                Checkout Book
            </button>
        </div>
    )

  }

export default Book
