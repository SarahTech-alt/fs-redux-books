import {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    
    console.log(`Adding book`, {title, author});

    // Send data to Redux
    dispatch({
      type: 'SET_NEW_BOOK',
      payload: {
        title: title,
        author: author,
      }
    });
    history.push('/confirm');

    // TODO - axios request to server to add book
  
  //   axios({
  //     method: 'POST',
  //     url: '/books',
  //     data: {
  //       title: title,
  //       author: author,
  //     }
  //   }).then (response => {
    
  //   })
  // };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input 
          required 
          placeholder="Title" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          required 
          placeholder="Author" 
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
}



export default BookForm;