import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { history } from './redux/configureStore'
import { ConnectedRouter } from 'connected-react-router'

import Main from './pages/Main'
import MapList from './pages/MapList'
import InfinityList from './pages/InfinityList'
import Detail from './pages/Detail'

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/map-list" exact component={MapList}></Route>
          <Route path="/infinity-list" exact component={InfinityList}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </Switch>
      </ConnectedRouter>
    </>
  )
}

export default App
