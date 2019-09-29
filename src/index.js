import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class H1 extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  }

  render() {
    const { text, color } = this.props

    return <h1 style={{ color }}>{text}</h1>
  }
}
