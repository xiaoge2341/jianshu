import Header from './layouts/header/index'
import {BrowserRouter,Route} from 'react-router-dom'
import {BaseRouter} from './routes/index'
import React, { Component } from 'react'
import './index.module.scss'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BaseRouter />
      </div>
    )
  }
}

