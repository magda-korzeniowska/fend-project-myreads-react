import React, { Component } from 'react'
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
            books={this.props.listOfBooks}
            bookShelfTitle = 'Currently Reading'
            shelf = 'currentlyReading'
          />
          <BookShelf
            books={this.props.listOfBooks}
            bookShelfTitle = 'Want To Read'
            shelf = 'wantToRead'
          />
          <BookShelf
            books={this.props.listOfBooks}
            bookShelfTitle = 'Read'
            shelf = 'Read'
          />
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks
