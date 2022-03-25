import React from 'react';

class App extends React.Component{
  render(){
    return(
      <>
      <h1>
        Hello Word!
      </h1>
      <h2>
        People
      </h2>
      <div>
      <p>
        {new Date().toLocaleDateString('pt-br')}
      </p>
      </div>
      </>
    )
  }
}

export default App;
