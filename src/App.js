import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from './redux/configureStore';
import { ConnectedRouter } from 'connected-react-router';


import Main from './pages/Main';
import MapList from './pages/MapList';
import InfinityList from './pages/InfinityList';
import ColumnList from './pages/ColumnList'
import Detail from './pages/Detail';
import Test from './pages/Test';
import Map from './components/Map';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
	return (
		<>
			{/* <Header /> */}
			<ConnectedRouter history={history}>
				<Switch>
					<Route path="/" exact component={Main}></Route>
					<Route path="/map-list" exact component={MapList}></Route>
					<Route path="/infinity-list" exact component={InfinityList}></Route>
          <Route path="/column-list" exact component={ColumnList}></Route>
					<Route path="/rooms/:id" exact component={Detail}></Route>
					{/* <Route paht="/test" exact component={Test}></Route> */}
					<Route paht="/map" exact component={Map}></Route>
				</Switch>
			</ConnectedRouter>
			<Footer />
		</>
	);
}

export default App;
