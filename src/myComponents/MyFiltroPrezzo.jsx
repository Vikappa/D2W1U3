import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MyFiltroPrezzo() {
  const handleDropdownClick = (e) => {
    e.stopPropagation()
  }

  return (
    <InputGroup className="py-2 my-0" onClick={handleDropdownClick}>
      <Form.Control
      className='my-auto'
        placeholder="min"
      />
            <Form.Control
      className='my-auto'
        placeholder="max"
      />
      <InputGroup.Text>€</InputGroup.Text>
    </InputGroup>
  )
}

export default MyFiltroPrezzo;
