import React from 'react';
import Card from '../components/Card'

const Cards = () => {
    return (
        <div className="animated fadeInUp">
            <div className="row">
                {[1, 2].map(item => (
                    <div className="col" key={item}>
                        <Card title="Title Main" category="Title Category">
                            <div>Content goes here</div>
                        </Card>
                    </div>
                ))}
            </div>
            <Card title="Title Main" category="Title Category">
                <div>Content goes here</div>
            </Card>
        </div>
    );
}

export default Cards;