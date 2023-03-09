import React, { Component } from "react";
import "./App.css";
import bruxa from "./img/bruxa.png";
import fada from "./img/fada.png";
import fantasma from "./img/fantasma.png";
import zumbi from "./img/zumbi.png";
import pirata from "./img/pirata.png";
import vampiro from "./img/vampiro.png";

class Carnaval extends Component {
  state = {
    fantasias: [
      { imagem: `${bruxa}`, titulo: 'Bruxa' },
      { imagem: `${fantasma}`, titulo: 'Fantasma' },
      { imagem: `${vampiro}`, titulo: 'Vampiro' },
      { imagem: `${zumbi}`, titulo: 'Zumbi' },
      { imagem: `${fada}`, titulo: 'Fada' },
      { imagem: `${pirata}`, titulo: 'Pirata' }
    ]
  };
  render() {
    return (
      <>
        <div className="carnaval"><h1>Carnaval VNW</h1></div>
        <section className="main">
          {this.state.fantasias.map((item) => (
            <div className="fantasia">
              <img src={item.imagem} alt={item.titulo} />
              <h2>{item.titulo}</h2>
            </div>
          ))}
        </section>
        <section className="footer">
          {this.state.fantasias.map((item) => (
            <div className="fantasiaFooter">
              <img src={item.imagem} />
            </div>
          ))}
        </section>
      </>

    );
  }
}


export default Carnaval;


