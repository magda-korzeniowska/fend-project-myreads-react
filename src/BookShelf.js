import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .filter(book => book.shelf === this.props.shelf)
              .map(book =>
                <li key={book.id}>
                  <Book
                    book={book}
                    currentShelf={this.props.shelf}
                    changeShelf={this.props.changeShelf}
                  />
                </li>
              )}
          </ol>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default BookShelf
