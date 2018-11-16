import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from "./BookShelf"

class ListBooks extends Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={this.props.books}
            bookShelfTitle = 'Currently Reading'
            shelf = 'currentlyReading'
            changeShelf={this.props.changeShelf}
          />
          <BookShelf
            books={this.props.books}
            bookShelfTitle = 'Want To Read'
            shelf = 'wantToRead'
            changeShelf={this.props.changeShelf}
          />
          <BookShelf
            books={this.props.books}
            bookShelfTitle = 'Read'
            shelf = 'read'
            changeShelf={this.props.changeShelf}
          />
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
