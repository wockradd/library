import React from 'react'

function SearchBook(props) {
    return (
        <div>
            <form>
            <label>Search book:</label>
            <input type='text' onChange={(e)=>props.onChange(e.target.value)}></input>
            </form> 
        </div>
    )
}

export default SearchBook
