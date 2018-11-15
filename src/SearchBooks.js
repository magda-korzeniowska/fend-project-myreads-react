import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {
    query: '',
    foundBoooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.getFoundBooks(query)
  }

  getFoundBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((foundBoooks) => {
        if (foundBoooks.length) {
          this.setState({ foundBoooks: foundBoooks })
        } else {
          this.setState({ foundBoooks: [] })
        }
      })
    } else {
      this.setState({ foundBoooks: [] })
    }
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
            {this.state.foundBoooks.map(foundBook => {
              let shelf = 'none'
              this.props.books.map(book => (
                book.id === foundBook.id ? shelf = book.shelf : ''
              ))
              return(
                <li key={foundBook.id}>
                  <Book
                    book={foundBook}
                    changeShelf={this.props.changeShelf}
                    currentShelf={shelf}
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
