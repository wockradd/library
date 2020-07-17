import React from 'react'
import AddBook from './AddBook'
import SearchBook from './SearchBook'

function FormHolder(props) {
    return (
        <div>
            <SearchBook onChange={props.searchBookOnChange}/>  
            <AddBook onSubmit={props.addBookOnSubmit}/>
        </div>
    )
}

export default FormHolder
