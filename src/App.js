import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { history } from './redux/configureStore'
import { ConnectedRouter } from 'connected-react-router'
import Main from './pages/Main'
import InfinityList from './pages/InfinityList'
import ColumnList from './pages/ColumnList'
import Detail from './pages/Detail'
import Map from './components/Map'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  return (
    <>
      {/* <Header /> */}
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/card-list" exact component={InfinityList}></Route>
          <Route path="/cardmap-list" exact component={ColumnList}></Route>
          <Route path="/rooms/:id" exact component={Detail}></Route>
          {/* <Route paht="/test" exact component={Test}></Route> */}
          <Route paht="/map" exact component={Map}></Route>
        </Switch>
      </ConnectedRouter>
      <Footer />
    </>
  )
}
export default App
