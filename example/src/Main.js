import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Sidebar from './components/Sidebar'

import Cards from './views/Cards'
import Buttons from './views/Buttons'
import Inputs from './views/Inputs'
import Typography from './views/Typography'

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
								<Route path="/cards" component={Cards} />
								<Route path="/buttons" component={Buttons} />
								<Route path="/inputs" component={Inputs} />
								<Route path="/typography" component={Typography} />
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
