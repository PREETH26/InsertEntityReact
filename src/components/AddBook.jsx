import React from 'react'
import "./AddBook.css"

function AddBook() {
  return (
    <>
    <div className='body'>
        <h1>Add Book</h1>
        <div className='for'>
      <form className='form'>
        <input type="text" placeholder='Title'/>
        <input type="text" placeholder='Author'/>
        <textarea placeholder='Description'/>
        <input type='url' placeholder='Cover Image URL'/>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default AddBook
