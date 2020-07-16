import React,{useState} from 'react'
import Book from './Book'
import {booksData} from "../data/Data"
import AddBook from './AddBook'
import SearchBook from './SearchBook'

const Library = () => {
    const [filterString, setFilterString] = useState('')
    const [books, setBooks] = useState(booksData)

    const handleFilterTextChange = (text) =>{
        setFilterString(text)
    }

    //TODO
    //decide whether we need to add a new book
    //or increase the quantity of one that already exists
    const addBook = (book)=>{
        setBooks(books.concat(book))
    }

    
    
    return (
      <div>
        <SearchBook onChange={handleFilterTextChange}/>  
        <AddBook onSubmit={addBook}/>
        {books.map(book=>{
            if(book.title.toLowerCase().includes(filterString.toLowerCase())){
                return (
                    <Book 
                        title={book.title} 
                        author={book.author} 
                        initialQuantity={book.quantity}
                        key={book.title.toLowerCase()}
                    />
                  )
            }else{
                return null
            }
        })}
      </div>
    )
  }



export default Library
