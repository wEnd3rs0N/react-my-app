import React, { Component } from "react";

class FormularioNotas extends Component {
    constructor(props){
        super(props);
        this.texto ="";
        this.titulo ="";
    }
    _handleMudancaTitulo(event) {
        event.stopPropagation();
       this.titulo = event.target.value;
       console.log(this.titulo);
    }
    _handleMudancaTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
        console.log(this.texto);
    }
    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }
    render() {
        return (
            <section className="container caixa-formulario-notas">
                <div className="row formulario-notas">
                    <form className="" onSubmit={this._criarNota.bind(this)}>
                        <div className="">
                            <label className="form-label">Titulo</label>
                            <input type="text" className="form-control" onChange={this._handleMudancaTitulo.bind(this)}></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descrição</label>
                            <textarea type="text" className="form-control" rows="5" onChange={this._handleMudancaTexto.bind(this)}></textarea>
                        </div>
                        <button type="submit " className="btn btn-primary ">Criar Nota</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default FormularioNotas;