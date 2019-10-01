import React from 'react'
import PropTypes from 'prop-types'

const H1 = ({ text, color }) => {
  return <h1 style={{ color }}>{text}</h1>
}

export { H1 }

H1.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}
