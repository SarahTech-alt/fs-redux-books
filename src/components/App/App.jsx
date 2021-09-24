import { HashRouter as Router, Route } from 'react-router-dom';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import ConfirmBook from '../ConfirmBook/ConfirmBook';

function App() {

  const dispatch = useDispatch();

  // TODO - GET Book List from server
  useEffect(() => {
    fetchBookList();
  },[])

  const fetchBookList = () => {
    axios({
      method: 'GET',
      url: '/books'
    }).then(response => {
      console.log(response);
      dispatch({
        type: 'SET_BOOK_LIST', payload: response.data,
       })
    });
  }


  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <Router>
          <Route exact path='/' component={BookList} />
          <Route exact path='/add' component={BookForm} />
          <Route exact path='/confirm' component={ConfirmBook} />
        </Router>
      </main>
    </div>
  );
}

export default App;