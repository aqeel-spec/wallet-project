import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import MyVerticallyCenteredModal from './Model';
import React from 'react';
import { useLocation } from 'react-router-dom';

const menuItems = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Whitepaper',
    path: '/whitepaper'
  },
]
const socialIcons = [
  {
    name: 'Twitter',
    path: 'https://twitter.com/defi_finance'
  },
  {
    name: 'Telegram',
    path: 'https://t.me/defi_finance'
  },
  {
    name: "Discord",
    path: "https://discord.com/invite/defi"
  },
  {
    name: "Youtube",
    path: "https://youtube.com/c/defi_finance"
  }
];
function NavScrollExample() {
  const [modalShow, setModalShow] = React.useState(false);
  const location = useLocation()
  return (
    <Navbar expand="lg" className="header px-5 ">
      <MyVerticallyCenteredModal 
       show={modalShow}
       onHide={() => setModalShow(false)}
       balance={0}
       total={0.003}
      />
      <Container fluid>
        <Link to='/'>
          <img
            src="logo192.png" // Replace with the actual path to your PNG logo image
            alt="Logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className=" gap-4 justify-content-end ">
          <Nav
            className=" my-2 text-md-center justify-content-end gap-5  my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll

          >
            {
              menuItems.map((item, index) => (
                <li key={index} className={`nav-item list-unstyled ${item.path === location.pathname ? 'active-link' : ''}`}> 
                  <Link to={item.path} className="nav-link  ">{item.name}</Link>
                </li>
              ))
            }
          </Nav>
          <Nav className='d-flex gap-lg-2 py-2 py-lg-none justify-content-center  gap-5 align-items-center text-center  flex-row ' >
            {
              socialIcons.map((icon, index) => (
                <li key={index} className=' nav-item gap-1  list-unstyled'>
                  <a href={icon.path} target="_blank" rel="noopener noreferrer" className="nav-link">
                    <Icon icon={icon.name} size={20} />
                  </a>
                </li>
              ))
            }
          </Nav>
          <Nav>
            {/* Wallet connecter */}
            {/* Boo`tstrap Button on Right */}
            <Button onClick={() => setModalShow(true)}  variant="secondary" size="lg" active className=' btn rounded-4 font-weight-bold bg-white px-4'>
              CONNECT WALLET
            </Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
