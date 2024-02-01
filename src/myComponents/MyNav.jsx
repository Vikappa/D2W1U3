import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MyFiltroGenere from './MyFiltroGenere';
import MyFiltroPrezzo from './MyFiltroPrezzo';
import CampoRicercaPerTitolo from './CampoRicercaPerTitolo';
import MyCarrello from './MyCarrello';

    const MyNav = ({ home, about, browse, ricerca, setRicerca, genereselezionato, setGenereselezionato, minPrezzo, setMinPrezzo, maxPrezzo, setMaxPrezzo, carrello, setCarrello }) => {
      const stopChiusuraDropDown = (e) => {
        e.preventDefault()
        e.stopPropagation()
      }
      return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between fixed-top py-0 w-100" id="navBar">
      <Container className='m-0 w-100 d-flex justify-content-between'>
      <img
              src="../EpiBook icon.png"
              width="56"
              height="56"
              className="d-inline-block align-top p-1 m-0 me-3"
              alt="React Bootstrap logo"
            />
        <Navbar.Brand href="#home">Epi-Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">{home.href}</Nav.Link>
            <Nav.Link href="#">{about.href}</Nav.Link>
            <Nav.Link href="#">{browse.href}</Nav.Link>
            <NavDropdown
             title="Filtri" id="dropdown-filtri">
              <NavDropdown.Item onClick={stopChiusuraDropDown} href="#action/3.1"  className='my-0'>
                <MyFiltroGenere genereselezionato={{genereselezionato}} setGenereselezionato={setGenereselezionato} />              
              </NavDropdown.Item  >
              <NavDropdown.Item href="#action/3.2"  onClick={stopChiusuraDropDown} >
                <MyFiltroPrezzo minPrezzo={minPrezzo} setMinPrezzo={setMinPrezzo} maxPrezzo={maxPrezzo} setMaxPrezzo={setMaxPrezzo} />
              </NavDropdown.Item>
              <NavDropdown.Item
               href="#action/3.4"  onClick={stopChiusuraDropDown} >
               <CampoRicercaPerTitolo ricerca={{ricerca}} setRicerca={setRicerca} />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Carrello" id="dropdown-carrello" className='false'>
              <NavDropdown.Item href="#"  className='my-0'>
               <MyCarrello carrello={carrello} setCarrello={setCarrello} />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default MyNav;