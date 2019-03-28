import React, { Component } from "react";
import Titulo from "../Titulo";
class App extends Component {
  render() {
    return (
      <Titulo subTitulo="Teste Sub" color="blue">
        Teste Componente Titulo
      </Titulo>
    );
  }
}

export default App;
