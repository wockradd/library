import React,{useState} from 'react'
import Book from './Book'
import {booksData} from "../data/Data"
import AddBook from './AddBook'
import SearchBook from './SearchBook'

const Library = () => {
    const [filterString, setFilterString] = useState('')

    const handleFilterTextChange = (text) =>{
        setFilterString(text)
    }

    
    
    return (
      <div>
        <SearchBook onChange={handleFilterTextChange}/>  
         
        {booksData.map(book=>{
            if(book.title.toLowerCase().includes(filterString.toLowerCase())){
                return (
                    <Book 
                        title={book.title} 
                        author={book.author} 
                        quantity={book.quantity}
                        key={book.title.toLowerCase()}
                    />
                  )
            }
          
        })}
      </div>
    )
  }



export default Library
