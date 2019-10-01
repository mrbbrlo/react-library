import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="logo">
                    <div className="logo-img"></div>
                    <p className="logo-label">mrbbrlo library</p>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link">
                            <i className="tim-icons icon-chart-pie-36"></i>
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/buttons" className="nav-link">
                            <i className="tim-icons icon-puzzle-10"></i>
                            <p>Buttons</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cards" className="nav-link">
                            <i className="tim-icons icon-atom"></i>
                            <p>Cards</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/qwe" className="nav-link">
                            <i className="tim-icons icon-align-center"></i>
                            <p>Item 1</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/esa" className="nav-link">
                            <i className="tim-icons icon-align-center"></i>
                            <p>Item 2</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;