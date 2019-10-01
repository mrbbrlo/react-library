import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Buttons from './views/Buttons'
import Cards from './views/Cards'
import Sidebar from './components/Sidebar'
import './styles.css'


class Main extends Component {

	render() {
		return (
			<React.Fragment>
				<div className="wrapper">
					<Sidebar />
					<div className="wrapper-panel">
						<div className="content">
							<Switch>
								<Route path="/buttons" component={Buttons} />
								<Route path="/cards" component={Cards} />
								<Redirect to="/cards" />
							</Switch>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Main
