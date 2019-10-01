import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import './styles.css'


class Main extends Component {

	render() {
		return (
			<React.Fragment>
				<div className="wrapper">
					<Sidebar></Sidebar>
					<div className="wrapper-panel">
						<div className="content">
							<div className="card">
								<div className="card-header">
									<h5 className="card__category">Title Category</h5>
									<h2 className="card__title">Title Main</h2>
								</div>
								<div className="card-body">

								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Main
