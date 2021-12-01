import React, { Component } from "react";

class CardNotas extends Component {
    render() {
        return (
            <div className="card card-nota">
                <div className="card-body">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p className="card-text">{this.props.texto}</p>
                </div>
            </div>
        );
    }
}

export default CardNotas;