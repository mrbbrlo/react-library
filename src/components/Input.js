import React from 'react'
import classNames from 'classnames'

const Input = ({ className, size, onChange, ...rest }) => {
  const classes = classNames('input', `input-${size}`, {}, className)

  return (
    <input
      {...rest}
      className={classes}
      onChange={e => (onChange ? onChange(e) : null)}
    />
  )
}

export default Input

Input.defaultProps = {
  type: 'text',
  size: 'md'
}
