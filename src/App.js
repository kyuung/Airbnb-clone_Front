import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { history } from './redux/configureStore'
import { ConnectedRouter } from 'connected-react-router'

import Main from './pages/Main'
import InfinityList from './pages/InfinityList'
import Detail from './pages/Detail'
import Map from './components/Map'
import Footer from './components/Footer'
import ColumnList from './pages/ColumnList'

function App() {
  return (
    <>
      {/* <Header /> */}
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/infinity-list" exact component={InfinityList}></Route>
          <Route path="/column-list" exact component={ColumnList}></Route>
          <Route path="/detail" exact component={Detail}></Route>
          <Route paht="/map" exact component={Map}></Route>
        </Switch>
      </ConnectedRouter>
    </>
  )
}

export default App
