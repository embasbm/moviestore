import React from 'react';

const NewMovieForm = ({ onNewMovie = f => f }) => {
  let title, text
  const submit = e => {
    e.preventDefault()
    onNewMovie(title.value, text.value)
    title.value = ''
    text.value = ''
    title.focus()
  }

  return (
    <form onSubmit={submit}>
      <input ref={input => title = input}
        type="text"
        placeholder="Title..." required />
      <input ref={input => text = input}
        type="text"
        placeholder="Text..." required />
      <button>Add Movie</button>
    </form>
  )
}

export default NewMovieForm;
