import React from 'react';

const Card = ({ category, title, children }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card__category">{category}</h5>
                <h2 className="card__title">{title}</h2>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default Card;