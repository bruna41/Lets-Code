// import React from 'react';

// export default function Hello(){
//     return (<h1>Hello!</h1>);
// }

// export default function Hello(props){
//     return (<h1>{props.text}</h1>);
// }

// export default function Hello(props){
//   return <>{props.children}</>;
// }

// export default function Hello({text}){
//     return (<h1>{text}</h1>);
// }

// export default function Hello({children}){
//   return <>{children}</>;
// }
import React from 'react';
const Titulo = ({text}) => <h1>{text}</h1>;
export default Titulo;