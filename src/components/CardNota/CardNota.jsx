// digitar imrc e dar enter
import React, { Component } from 'react';
import "./style.css"; // importar um estilo css
// digitar CC e dar enter
class CardNota  extends React.Component {
    render() { 
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                </header>
            <p className="card-nota_texto">{this.props.texto}</p>
        </section>
        );
    }
}
 
export default CardNota;
