import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  // }

  state = {
    books:  []
  }

  componentDidMount = () => {
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.getBooks)
  }

  render() {
    return (
      <div className="app">
        <ListBooks
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
      </div>
    )
  }
}

export default BooksApp
