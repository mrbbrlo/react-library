import React, { Component } from 'react'

import { Navbar, H1, Button, Input } from 'react-library'
import './index.css'

export default class App extends Component {
  state = {
    inputVal: ''
  }

  handleClick = e => {
    console.log(e.target.innerText)
    alert(e.target.innerText + ' clicked')
  }

  handleInput = e => {
    console.log(e.currentTarget.value)
    this.setState({ inputVal: e.currentTarget.value })
  }

  render() {
    return (
      <div>
        <H1 color="lightcoral" text="Modern React component module" />
        
        <Navbar>
          <Button
            className="alohadance"
            size="sm"
            variant="danger"
            label="small button in Navbar"
            onClick={this.handleClick}
          />
        </Navbar>

        <hr />

        <Button
          className="alohadance"
          size="lg"
          variant="primary"
          label="Button with icon"
          icon="fab fa-accessible-icon"
          onClick={this.handleClick}
          style={{ color: 'white' }}
        />

        <hr />

        <span>Input with default props: </span>
        <Input />

        <hr />

        <span>Input with all props and bound event: </span>
        <Input
          name="InputName"
          size="lg"
          style={{ backgroundColor: 'lightgreen', border: '1px solid gray' }}
          className="additional class"
          placeholder="Enter..."
          // disabled
          value={this.state.inputVal}
          onChange={this.handleInput}
        />
        <span style={{ marginLeft: 10 }}>{this.state.inputVal}</span>
      </div>
    )
  }
}
