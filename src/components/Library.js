import React,{useState} from 'react'
import Book from './Book'
import {booksData} from "../data/Data"
import FormHolder from './FormHolder'

const Library = () => {
    const [filterString, setFilterString] = useState('')
    const [books, setBooks] = useState(booksData)

    
    const handleFilterTextChange = (text) =>{
        setFilterString(text)
    }

    
    const addBook = (book)=>{
      let alreadyHaveBook = false
      let atIndex;

      //loop through to see if we have the book or not
      for(let i=0 ; i<books.length ; i++){
        if(book.title.toLowerCase() === books[i].title.toLowerCase() && book.author.toLowerCase() === books[i].author.toLowerCase()){
          alreadyHaveBook = true
          atIndex = i
          break
        }
      }

      
      if(alreadyHaveBook){//update books state
        let tempBooks = [...books]//not sure why i've gotta do this copy thing tbh
        tempBooks[atIndex].quantity++   //doesnt rerender otherwise
        setBooks(tempBooks)
      }else{//add the new book
        setBooks(books.concat(book))
      }
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
        <FormHolder 
          searchBookOnChange={handleFilterTextChange} 
          addBookOnSubmit={addBook}
        />
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
