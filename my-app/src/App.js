import React, { Component } from "react";
import FormularioNotas from "./components/formularioNotas";
import ListaDeNotas from "./components/listaDeNotas";

import "./assets/css/responsive.css"
import "./assets/css/App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas:[]
    }
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayDeNotas = [...this.state.notas,novaNota];
    const novoEstado = {
      notas:novoArrayDeNotas
    }
    this.setState(novoEstado);
  }
  render() {
    return (
      <main className="container-fluid caixa-pagina-principal">
        <section className="row">
          <FormularioNotas criarNota={this.criarNota.bind(this)} />
          <ListaDeNotas notas={this.state.notas} />
        </section>
      </main>
    );
  }
}

export default App;
