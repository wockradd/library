import React, {useState} from 'react'

const Book = (props) => {
    const [quantity, setQuantity] = useState(props.initialQuantity)

    
    if(quantity!==0){
        return (
            <div>
              <h2>{props.title}</h2>
              <p>By {props.author}</p>
              <p>Quantity: {quantity}</p>
              <button 
                  onClick={()=>{
                  setQuantity(quantity => quantity-1)
                  }}>Checkout Book</button>
            </div>
          )
    }else{
        return null
    }
  }

export default Book
