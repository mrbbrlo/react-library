import React from 'react'
// import './button.scss'
import classNames from 'classnames'

const Button = ({
  type,
  className = '',
  variant,
  size,
  style,
  icon,
  label,
  disabled,
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
      type={type}
      className={classes}
      style={style}
      disabled={disabled}
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
