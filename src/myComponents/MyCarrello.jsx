import Dropdown from 'react-bootstrap/Dropdown';
import { Component } from 'react';

class MyCarrello extends Component {

render(){

let carrello = this.props.carrello

return (
<>{carrello.map( (itemCarrello, index) => {
    return(
        <Dropdown.Item key={"itemCarrello"+(index+1)} 
        className='d-flex justify-content-between align-items-center' 
        href="#" 
        target="_blank">{itemCarrello.title}</Dropdown.Item>  
    )})}</>
)
      }
}

export default MyCarrello;