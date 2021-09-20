import React, { Component } from 'react';
import "./style.css"

class FormularioCadastro extends Component{
    constructor(props){
        super(props)
        this.titulo = "";
        this.texto = ""
        // cria o titulo no construtor para dps usar ele na função abaixo e salvar em uma variável
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation(); // evita propragação do evento no DOM
        this.titulo = evento.target.value
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation(); // evita propragação do evento no DOM
        this.texto = evento.target.value
    }

    // se baseando no metodo do App.js
    _criarNota(evento){
        evento.preventDefault(); // não recarrega a página 
        evento.stopPropagation(); // evita propragação do evento no DOM
        this.props.criarNota(this.titulo, this.texto) // vem do App.js, props vem do construtor desta classe
    }

    render(){
        return(
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <input className="form-cadastro_input" type="text" placeholder="Titulo" onChange={this._handleMudancaTitulo.bind(this)}></input>
                <textarea className="form-cadastro_input" placeholder="Escreva sua nota: " rows="5" onChange={this._handleMudancaTexto.bind(this)}></textarea>
                <button className="form-cadastro_input form-cadastro_submit">Criar</button>
            </form>
        );
    }

}

export default FormularioCadastro;