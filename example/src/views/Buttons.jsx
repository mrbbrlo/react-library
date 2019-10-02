import React, { Component } from 'react';
import Card from '../components/Card'
import { Button } from 'react-library'

class Buttons extends Component {

    state = {
        btnColor: true
    }

    handleBtnClick = e => {
        alert("Button " + e.target.innerText + " clicked!")
    }

    handleBtnColorClick = () => {
        this.setState({btnColor: !this.state.btnColor})
    }

    render() {
        return (
            <div className="animated fadeInUp">
                <Card title="Buttons" category="Use description">
                    <figure className="bg-dark">
                        <code className="js">
                            <span className="main">import </span>
                            {"{ Button }"}
                            <span className="main"> from </span>
                            <span className="string">'mrbbrlo-react-library'</span>
                        </code>
                    </figure>
                </Card>
                <Card title="Examples" category="Color palette">
                    <p className="card__description">Inspect elements to see how they are rendered</p>
                    <div className="card-examples card-buttons-wrap">
                        <Button>Brand</Button>
                        <Button color="success">Success</Button>
                        <Button color="warning">Warning</Button>
                        <Button color="error">Error</Button>
                        <Button color="secondary">Secondary</Button>
                    </div>
                    <figure className="bg-dark">
                        <code className="js">
                            <p>
                                <span className="component">{"<Button>"}</span>
                                <span>Brand</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                            <p>
                                <span className="component">{"<Button "}</span>
                                <span className="attr">color=</span>
                                <span className="value">"success"</span>
                                <span className="component">></span>
                                <span>Success</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                            <p>
                                <span className="component">{"<Button "}</span>
                                <span className="attr">color=</span>
                                <span className="value">"warning"</span>
                                <span className="component">></span>
                                <span>Warning</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                            <p>
                                <span className="component">{"<Button "}</span>
                                <span className="attr">color=</span>
                                <span className="value">"error"</span>
                                <span className="component">></span>
                                <span>Error</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                            <p>
                                <span className="component">{"<Button "}</span>
                                <span className="attr">color=</span>
                                <span className="value">"secondary"</span>
                                <span className="component">></span>
                                <span>Secondary</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                        </code>
                    </figure>
                </Card>
                <Card title="Sizes" category="List of Buttons">
                    <div className="card-examples card-buttons-wrap">
                        <Button className="btn-sm">Small Button</Button>
                        <Button>Normal Button</Button>
                        <Button className="btn-lg">Large Button</Button>
                    </div>
                    <figure className="bg-dark">
                        <code className="js">
                            <p>
                                <span className="component">{"<Button "}</span>
                                <span className="attr">className=</span>
                                <span className="value">"btn-sm"</span>
                                <span className="component">></span>
                                <span>Small Button</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                            <p>
                                <span className="component">{"<Button>"}</span>
                                <span>Normal Button</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                            <p>
                                <span className="component">{"<Button "}</span>
                                <span className="attr">className=</span>
                                <span className="value">"btn-lg"</span>
                                <span className="component">></span>
                                <span>Large Button</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                        </code>
                    </figure>
                </Card>
                <Card title="Icons" category="Add icons to Your buttons">
                    <div className="card-examples card-buttons-wrap">
                        <Button className="btn-sm" icon="tim-icons icon-puzzle-10">Small Button with Icon</Button>
                        <Button icon="tim-icons icon-minimal-left">Normal Button with Icon</Button>
                        <Button className="btn-lg" icon="tim-icons icon-atom">Large Button with Icon</Button>
                    </div>
                    <figure className="bg-dark">
                        <code className="js">
                            <p>
                                <span className="component">{"<Button "}</span>
                                <span className="attr">className=</span>
                                <span className="value">"btn-sm" </span>
                                <span className="attr">icon=</span>
                                <span className="value">"icon-name"</span>
                                <span className="component">></span>
                                <span>Small Button with Icon</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                            <p>
                                <span className="component">{"<Button "}</span>
                                <span className="attr">icon=</span>
                                <span className="value">"icon-name"</span>
                                <span className="component">></span>
                                <span>Normal Button</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                            <p>
                                <span className="component">{"<Button "}</span>
                                <span className="attr">className=</span>
                                <span className="value">"btn-lg" </span>
                                <span className="attr">icon=</span>
                                <span className="value">"icon-name"</span>
                                <span className="component">></span>
                                <span className="component">></span>
                                <span>Large Button</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                        </code>
                    </figure>
                </Card>
                <Card title="onClick( )" category="Event listener">
                    <p className="card__description">
                        Button has an
                        <code className="js"><span className="attr"> @onClick </span></code>
                        method which returns an 
                        <code className="js"><span className="main"> event </span></code>
                    </p>
                    <div className="card-examples card-buttons-wrap">
                        <Button color="success" icon="tim-icons icon-alert-circle-exc"
                            onClick={this.handleBtnClick}>
                            Click me
                        </Button>
                        <Button color={this.state.btnColor ? 'warning' : 'brand'}
                            onClick={ this.handleBtnColorClick }>
                            Change color
                        </Button>
                    </div>
                    <figure className="bg-dark">
                        <code className="js">
                            <p>
                                <span className="component">{"<Button "}</span>
                                <span className="attr">onClick=</span>
                                <span>{"{ "}</span>
                                <span className="main-red">this.</span>
                                <span>handleBtnClick</span>
                                <span>{" } "}</span>
                                <span className="attr">icon=</span>
                                <span className="value">"icon-name"</span>
                                <span className="component">></span>
                                <span>Click me</span>
                                <span className="component">{"</Button>"}</span>
                            </p>
                        </code>
                    </figure>
                </Card>
            </div>
        )
    }
}

export default Buttons;