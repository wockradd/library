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

    
    const addBook = (book)=>{
        setBooks(books.concat(book))
    }

    const removeBook = (book)=>{
      for(let i=0 ; i<books.length ; i++){
        if(JSON.stringify(books[i])===JSON.stringify(book)){
          let tempBooks = [...books]//not sure why i've gotta do this copy thing tbh
          tempBooks[i].quantity--   //doesnt rerender otherwise
          setBooks(tempBooks)
          break
        }
      }
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
                        quantity={book.quantity}
                        key={book.title.toLowerCase()+" "+book.author.toLowerCase()}
                        onClick={removeBook}
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
