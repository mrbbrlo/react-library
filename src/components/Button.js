import React from 'react'
import classNames from 'classnames'

const Button = ({
  ...rest,
  className = '',
  color,
  icon,
  children,
  onClick
}) => {
  const classes = classNames(
    'btn',
    `btn-${color}`,
    {},
    className
  )

  return (
    <button
      {...rest}
      className={classes}
      onClick={e => onClick && onClick(e)}
    >
      {icon && <i className={icon}></i>} <span>{children}</span>
    </button>
  )
}

export default Button

Button.defaultProps = {
  type: 'button',
  color: 'brand',
}
