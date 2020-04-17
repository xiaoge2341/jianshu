import Header from './layouts/header/index'
import {BaseRouter} from './routes/index'
import {HashRouter, } from 'react-router-dom'
import React, { Component } from 'react'
import './index.module.scss'
 class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <HashRouter>
          <Header />
        </HashRouter>
        
        <BaseRouter />
      </div>
    )
  }
}

export default App