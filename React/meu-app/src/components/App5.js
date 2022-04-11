import React from 'react';

class App5 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { nome: undefined, txtNome: '' }
        // this.changeName = this.changeName.bind(this)
    }
    changetxtName = (event) => {
        this.setState({ txtNome: event.target.value })
    }
    persistNome = () => {
        this.setState({ nome: this.state.txtNome })
    }
    render() {
        if (!this.state.nome) {
            return (
                <div>
                    Nome: <input type='text' value={this.state.nome} onChange={this.changetxtName}></input>
                    <button onClick={this.persistNome}>Salvar</button>
                </div>
            )
        }else{
            return (
                <>

                    <h1>
                        Olá, {this.state.nome}
                    </h1>
                </>
            )
        }

    }

    // render() {
    //     const renderForm = () => {
    //         return (
    //             <>
    //                 Nome: <input type='text' onChange={this.changeTxtNome} />
    //                 <button onClick={this.persistTxtNome}>Salvar</button>
    //             </>
    //         )
    //     }

    //     const renderText = () => {
    //         return (
    //             <>
    //                 <p>Olá {this.state.nome}</p>
    //             </>
    //         )
    //     }

    //     return !this.state.nome ? renderForm() : renderText()
    // }

}

export default App5;