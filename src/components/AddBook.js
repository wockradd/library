import React from 'react'

function AddBook(props) {
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault()
                props.onSubmit({
                    "title":e.target.title.value,
                    "author":e.target.author.value,
                    "quantity":1
                })
            }}>
                <label>Title:</label>
                <input type='text' name='title'></input>
                <br/>
                <label>Author:</label>
                <input type='text'name='author'></input>
                <br/>
                <input type='submit' value='Return Book'></input>
            </form>   
        </div>
    )
}

export default AddBook
