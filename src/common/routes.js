import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Container from 'container'
import Login from 'pages/login'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

// route停留位置
const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Route path="/" component={Container} />
      <Route path="/login" component={Login} />
      {/*<Redirect from='*' to='/login' />*/}
      <Redirect />
    </div>
  </HashRouter>
)

export default routes;
