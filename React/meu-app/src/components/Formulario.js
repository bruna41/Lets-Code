import React from 'react';

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            linguagem: '',
            tipo: '',
            dedico: false,
            bio: '' 
        }
        
        this.handleSubmit = (event) =>{
            event.preventDefault()
            console.log(this.state)
        }

        this.changeName = (event) =>{
            this.setState({nome: event.target.value})
        }
        this.changeSelect = (event) =>{
            this.setState({linguagem: event.target.value})
        }
        this.changeRadio = (event) =>{
            this.setState({tipo: event.target.value})
        }
        this.changeDedico = (event) =>{
            this.setState({dedico: event.target.checked})
        }
        this.changeBio = (event) =>{
            this.setState({bio: event.target.checked})
        }
    } 
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome:
                        <input type='text' value={this.state.nome} onChange={this.changeName}></input><br />
                    </label>
                    <label>
                        Linguaguem Favorita:
                        <select value={this.state.linguagem} onChange={this.changeSelect}>
                            <option>JS</option>
                            <option>Phyton</option>
                            <option>Java</option>
                        </select><br />
                    </label>
                    {/* <label>
                        Sou:
                        <input type='radio' checked={this.state.tipo == 'programador'} onChange={this.changeRadio} value='programador'>Programador</input>
                        <input type='radio' checked={this.state.tipo == 'estudante'} onChange={this.changeRadio} value='estudante'>Estudante</input><br />
                    </label>
                    <label>
                    <input type='checkbox' checked={this.state.dedico} onChange={this.changeDedico}>Dedico 8hrs semanais aos estudos.</input>
                    </label>
                    <br/> */}
                    <label>
                        Conte sobre você:
                        <textarea cols='50' value={this.state.bio} onChange={this.changeio}/>
                    </label><br />
                    <input type='submit' value='salvar'></input>
                </form>
            </div>
        )
    }
}
export default Formulario;