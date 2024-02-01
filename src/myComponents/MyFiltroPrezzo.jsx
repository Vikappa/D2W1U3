import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MyFiltroPrezzo(props, minPrezzo, setMinPrezzo,  maxPrezzo, setMaxPrezzo) {
  const handleDropdownClick = (e) => {
    e.stopPropagation()
  }

  const updateMinimo = (e) => {
    e.preventDefault()
    props.setMinPrezzo(e.target.value)
  }

  const updateMassimo = (e) => {
    e.preventDefault()
    props.setMaxPrezzo(e.target.value)
  }

  return (
    <InputGroup className="py-2 my-0" onClick={handleDropdownClick}>
      <Form.Control
      key={"minPrezzo"}
      className='my-auto'
        placeholder="min"
        onChange={updateMinimo}
        type='number'
        value={props.minPrezzo}
        min={0}
      />
            <Form.Control
            key={"maxPrezzo"}
      className='my-auto'
        placeholder="max"
        onChange={updateMassimo}
        type='number'
        min={props.minPrezzo}
        value={props.maxPrezzo}
      />
      <InputGroup.Text>€</InputGroup.Text>
    </InputGroup>
  )
}

export default MyFiltroPrezzo;
