import React, {useState} from 'react';

// export default function App(){

//   const [nome, setNome] = useState('teste');
//   const click = () => setNome('teste2')

//   return (<h1 onClick={click}>{nome}</h1>);
// }

export default function App(){

    const [nome, setNome] = useState('');

    return (
        <div>
            Nome: <input type='text' value={nome} onChange={(event) => setNome(event.target.value)}></input><br />
            Olá, {nome}
        </div>
    );
}