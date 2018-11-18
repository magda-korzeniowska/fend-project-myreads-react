# MyReads Project

Project #7<br>
Created for the Udacity Nanodegree Front End Web Developer (Full Google Scholarship)

[LIVE PREVIEW](https://magda-korzeniowska.github.io/fend-project-myreads-react/)

## Table of Contents

* [Project Description](#project-description)
* [Installation](#installation)
* [File Structure](#file-structure)
* [Backend Server](#backend-server)
* [Important](#important)
* [Create React App](#create-react-app)
* [Sources](#sources)

## Project Description

For the **MyReads** project, students were given [a starter template](https://github.com/udacity/reactnd-project-myreads-starter) - a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. Student's job was to add interactivity to the app by refactoring the static code in this template.

This app allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Installation
1. Clone repository using:

    `$ git clone https://github.com/magda-korzeniowska/fend-project-myreads-react`

2.  Install all dependencies:

    `$ npm install`

3. Run application:

    `$ npm start`

4. After running npm start, the React App should open automatically in your browser. If it doesn't, open `localhost:3000` in your browser.

## File Structure
```bash
├── README.md
├── SEARCH_TERMS.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── Book.js #
    ├── BooksAPI.js
    ├── BookShelf.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    ├── index.js
    ├── ListBooks.js
    └── SearchBooks.js
```

## Backend Server

The provided by Udacity file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [`SEARCH_TERMS.md`](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

## Sources
- starter code: [Udacity](https://github.com/udacity/reactnd-project-myreads-starter)
- backend server: [`BooksAPI.js`](src/BooksAPI.js) provided by Udacity
- placeholder for books with no cover image: [placeholder.com](https://placeholder.com)
