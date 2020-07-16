import React from 'react'

function AddBook() {
    return (
        <div>
            <form>
            <label>Title:</label>
            <input type='text'></input>
            <br/>
            <label>Author:</label>
            <input type='text'></input>
            <br/>
            <input type='submit' value='Return Book'></input>
            </form>   
        </div>
    )
}

export default AddBook
