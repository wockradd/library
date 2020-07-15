import React from 'react'
import Book from './Book'

const Library = ({booksData}) => {
    return (
      <div>
        {booksData.map(item=>{
          return (
            <Book title={item.title} author={item.author} key={item.key}/>
          )
        })}
      </div>
    )
  }

export default Library
