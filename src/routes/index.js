import React from 'react'
import {HashRouter,Route} from 'react-router-dom'
import Home from './../pages/home/index'
import Detail from './../pages/detail/loadable'
import Sign_in from '../pages/sign_in/index'
import Sign_up from '../pages/sign_up/index'
import Write from './../pages/write/index'
export const routes = [

  {
    path:'/',
    component:Home,
    exact:true
  },
  {
    path:'/detail/:writerId',
    component:Detail,
  },
  {
    path:'/sign_in',
    component:Sign_in
  },
  {
    path:'/sign_up',
    component:Sign_up
  },
  {
    path:'/write',
    component:Write
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