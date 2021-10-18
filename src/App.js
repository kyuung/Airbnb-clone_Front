import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { history } from './redux/configureStore'
import { ConnectedRouter } from 'connected-react-router'

import Main from './pages/Main'
import List from './pages/List'

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/List" exact component={List}></Route>
        </Switch>
      </ConnectedRouter>
    </>
  )
}

export default App
