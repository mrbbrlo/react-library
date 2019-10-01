import React from 'react'
import classNames from 'classnames'

const Navbar = ({ children, variant, className = '' }) => {
  const classes = classNames('navbar', `navbar-${variant}`, className)

  return <nav className={classes}>{children}</nav>
}

export default Navbar

Navbar.defaultProps = {
  variant: 'light'
}
