import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {
    query: '',
    foundBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.getFoundBooks(query)
  }

  getFoundBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((foundBooks) => {
        if (foundBooks.length) {
          this.setState({ foundBooks: foundBooks })
        } else {
          this.setState({ foundBooks: [] })
        }
      })
    } else {
      this.setState({ foundBooks: [] })
    }
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.foundBooks.length > 0 && (
              this.state.foundBooks.map(foundBook => {
                let bookShelf = 'none'
                this.props.books.map(book => (
                  book.id === foundBook.id ? bookShelf = book.shelf : ''
                ))
                return(
                  <li key={foundBook.id}>
                    <Book
                      book={foundBook}
                      changeShelf={this.props.changeShelf}
                      currentShelf={bookShelf}
                    />
                  </li>
                )
              })
            )}

            {this.state.foundBooks.length === 0 && this.state.query.length !== 0 && (
              <span className="no-book-found">Sorry, no book found</span>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default SearchBooks
