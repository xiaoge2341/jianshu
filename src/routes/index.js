import React from 'react'
import {BrowserRouter,HashRouter,Route} from 'react-router-dom'
import Footer from './../layouts/footer/index'
import Home from './../pages/home/index'
import Detail from './../pages/detail/index'

export const routes = [
  {
    path:'/footer',
    component:Footer,
  },
  {
    path:'/',
    component:Home,
    exact:true
  },
  {
    path:'/detail',
    component:Detail,
  }
]

export const BaseRouter = () => {
  return (
    <HashRouter>
      <div>
        {
          routes.map((value,index) => {
            return (
              <Route 
                key = {index}
                {...value}
              />
            )
          })
        }
      </div>
    </HashRouter>
  )
}