import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="logo">
                    <div className="logo-img"></div>
                    <p className="logo-label">mrbbrlo library</p>
                </div>
                <ul className="nav">
                    <li className="nav-item active">
                        <a href="#empty" className="nav-link">
                            <i className="tim-icons icon-chart-pie-36"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#empty" className="nav-link">
                            <i className="tim-icons icon-atom"></i>
                            <p>Item 2</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#empty" className="nav-link">
                            <i className="tim-icons icon-atom"></i>
                            <p>Item 3</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#empty" className="nav-link">
                            <i className="tim-icons icon-atom"></i>
                            <p>Item 4</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#empty" className="nav-link">
                            <i className="tim-icons icon-atom"></i>
                            <p>Item 5</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;