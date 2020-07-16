import React, {useState} from 'react'

const Book = (props) => {
    const [quantity, setQuantity] = useState(props.initialQuantity)

    
    
    return (
        <div>
            <h2>{props.title}</h2>
            <p>By {props.author}</p>
            <p>Quantity: {quantity}</p>
            <button
                disabled = {quantity <= 0}
                onClick={()=>{
                setQuantity(quantity => quantity-1)
            }}>
                Checkout Book
            </button>
        </div>
    )

  }

export default Book
