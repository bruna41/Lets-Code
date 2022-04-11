import React from 'react';

class Lista extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: ['item1', 'item2', 'item3', 'item4']
        }
    } 
    
    render() {
        return(
            <div>
                <ul>
                    {this.state.items.map(item => <li>Item</li>)}<br></br>
                    {this.state.items.map(item => <li>{item}</li>)}<br></br>
                    {this.state.items.map((item, indice) => <li key={indice}>{item}</li>)}<br></br>
                </ul>
            </div>
        )
    }
}
export default Lista;