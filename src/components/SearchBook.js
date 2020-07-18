import React from 'react'

function SearchBook(props) {
    return (
        <div>
            <h2 className='centered'>Search</h2>
            <form className='centered'>
            <input 
                type='text' 
                onChange={(e)=>props.onChange(e.target.value)}
                className='prettyInput'
                placeholder='Search by title'
            ></input>
            </form> 
        </div>
    )
}

export default SearchBook
