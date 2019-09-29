import React, { Component } from 'react'

import { H1, Button } from 'react-library'
import './index.css'

export default class App extends Component {
  handleClick = e => {
    console.log(e)
  }

  render() {
    return (
      <div>
        <H1 color="lightcoral" text="Modern React component module" />
        <Button
          className="alohadance"
          size="sm"
          variant="danger"
          label="BUTTON BA FAKA"
          icon="fab fa-accessible-icon"
          onClick={this.handleClick}
        />
        <Button
          className="alohadance"
          size="lg"
          variant="primary"
          label="BUTTON BA FAKA"
          icon="fab fa-accessible-icon"
          onClick={this.handleClick}
        />
      </div>
    )
  }
}
