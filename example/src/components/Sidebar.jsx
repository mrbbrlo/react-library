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
                        <NavLink to="/cards" className="nav-link">
                            <i className="tim-icons icon-atom"></i>
                            <p>Cards</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/buttons" className="nav-link">
                            <i className="tim-icons icon-puzzle-10"></i>
                            <p>Buttons</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/inputs" className="nav-link">
                            <i className="tim-icons icon-puzzle-10"></i>
                            <p>Inputs</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/typography" className="nav-link">
                            <i className="tim-icons icon-caps-small"></i>
                            <p>Typography</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;