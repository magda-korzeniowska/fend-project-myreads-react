import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// I used HashRouter instead of BrowserRouter to make it possible to deploy
// the app to gh-pages and have the app preview in README.md
// I was trying to find a way of getting BrowserRouter to work on gh-pages,
// but, for a time being, I haven't succeeded. 

ReactDOM.render(
  <HashRouter><App /></HashRouter>,
  document.getElementById('root')
)
