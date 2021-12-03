import React, { Component } from "react";
import CardNotas from "../cardNotas";

class ListaDeNotas extends Component {
    render() {
        return (
            <section className="container caixa-lista-nota">
                 <div className="row" >
                 {this.props.notas.map((nota, index) => {
                    return (

                        <CardNotas 
                        key={index}
                        indice={index}
                        apagarNota={this.props.apagarNota} 
                        titulo={nota.titulo} 
                        texto={nota.texto} 
                        />
                    );
                })}
                </div>
            </section>
        );
    }
}

export default ListaDeNotas