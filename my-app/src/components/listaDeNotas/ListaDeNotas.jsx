import React, { Component } from "react";
import CardNotas from "../cardNotas";

class ListaDeNotas extends Component {
    render() {
        return (
            <section className="container caixa-lista-nota">
                 <div className="row" >
                 {this.props.notas.map((nota, index) => {
                    return (
                        <CardNotas titulo={nota.titulo} texto={nota.texto} key={index}/>
                    );
                })}
                </div>
            </section>
        );
    }
}

export default ListaDeNotas