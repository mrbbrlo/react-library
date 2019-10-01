import React from 'react'
import classNames from 'classnames'

const Button = ({
  ...rest,
  className = '',
  variant,
  size,
  icon,
  label,
  onClick
}) => {
  const classes = classNames(
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    {},
    className
  )

  return (
    <button
      {...rest}
      className={classes}
      onClick={e => onClick(e)}
    >
      {icon && <i className={icon}></i>} {label}
    </button>
  )
}

export default Button

Button.defaultProps = {
  variant: 'primary',
  size: 'md'
}
