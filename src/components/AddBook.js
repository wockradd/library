import React from 'react'

function AddBook(props) {
    return (
        <div>
            <h2 className='centered'>Return Book</h2>
            <form
                onSubmit={e=>{
                    e.preventDefault()
                    if(e.target.title.value !== '' && e.target.author.value !== ''){
                        props.onSubmit({
                            "title":e.target.title.value.trim().toString(),
                            "author":e.target.author.value.trim().toString(),
                            "quantity":1
                        })
                    }else{
                        alert("Fill out the form dickhead")
                    }
                }}
                className='centered'
            >
                
                <input type='text' name='title' className='prettyInput' placeholder='Title'></input>
                <br/>
                
                <input type='text'name='author'className='prettyInput'placeholder='Author'></input>
                <br/>
                <input type='submit' value='Return'className='prettyInput'></input>
            </form>   
        </div>
    )
}

export default AddBook
