import React, { Component } from "react";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
import "./style.css"

class CardNotas extends Component {
    apagar() {

        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }
    render() {
        return (
            <div className="card card-nota">
                <header className="lixeira-icon p-1 pb-0">

                    <DeleteSVG onClick={this.apagar.bind(this)} />

                </header>

                <div className="card-body pt-0">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p className="card-text">{this.props.texto}</p>
                </div>
            </div>
        );
    }
}

export default CardNotas;