import React from 'react';

class App3 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {nome: ''}
        // this.changeName = this.changeName.bind(this)
    }
    changeName = (event)=>{
        this.setState({nome: event.target.value})
    }
  render(){
    return(
      <>
      Nome: <input type='text' value={this.state.nome} onChange={this.changeName}></input>
      <h1>
          Olá, {this.state.nome}
      </h1>
      </>
    )
  }
}

export default App3;