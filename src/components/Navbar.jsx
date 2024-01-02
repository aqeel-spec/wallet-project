import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
    <Navbar expand="lg" className="header px-4 ">
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
            className=" my-2 text-md-center justify-content-end gap-4  my-lg-0"
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
            <Button onClick={() => setModalShow(true)}  variant="secondary" size="lg" active className=' btn rounded-4 font-weight-bold bg-white text-warning px-4'>
              CONNECT WALLET
            </Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
{/* <Navbar.Collapse id="navbarScroll" className="justify-content-end "> */}
  
  // <nav className='navbar navbar-expand-lg bg-black'>
  //   <div className='header justify-content-between '>
  //     {/* Logo Image on Left */}
      // <img
      //   src="logo192.png" // Replace with the actual path to your PNG logo image
      //   alt="Logo"
      // />
  //     {/* Toggle button for collapsed menu */}
      // <button className="navbar-toggler border border-1 focus:outline-none  border-white p-2 text-white "  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
      //   {
      //     isOpen ? (
      //       <Icon icon="X" size={20} />
      //     ) : (
      //       <Icon icon="List" size={20} />
      //     )
      //   }
      // </button>
  //     {/* Collapsible menu */}
  //     <div className={`collapse active:bg-warning navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
  //       {/* menu icons list */}
  //       <ul className='navbar-nav me-auto  mb-2 mb-lg-0 d-flex gap-5 text-decoration-none align-items-center justify-content-center list-unstyled text-center  '>
  //         {
  //           menuItems.map((item, index) => (
              // <li key={index} className='nav-item list-unstyled'> 
              //   <Link to={item.path} className="nav-link  ">{item.name}</Link>
              // </li>
  //           ))
  //         }
  //         <div className=' gap-4 position-relative  d-flex align-items-center text-white'>
            // {
            //   socialIcons.map((icon, index) => (
            //     <li key={index} className='nav-item gap-1  list-unstyled'>
            //       <a href={icon.path} target="_blank" rel="noopener noreferrer" className="nav-link">
            //         <Icon icon={icon.name} size={20} />
            //       </a>
            //     </li>
            //   ))
            // }
  //         </div>
          // {/* Wallet connecter */}
          // {/* Boo`tstrap Button on Right */}
          // <Button  variant="secondary" size="lg" active className=' btn rounded-4 font-weight-bold bg-white text-warning px-4'>
          //   CONNECT WALLET
          // </Button>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>


// // Components/NavBar.js
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'react-bootstrap-icons';
// import Icon from './Icon';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

// const menuItems = [
//   {
//     name: 'Home',
//     path: '/'
//   },
//   {
//     name: 'Whitepaper',
//     path: '/whitepaper'
//   },
// ]
// const socialIcons = [
//   {
//     name: 'Twitter',
//     path: 'https://twitter.com/defi_finance'
//   },
//   {
//     name: 'Telegram',
//     path: 'https://t.me/defi_finance'
//   },
//   {
//     name: "Discord",
//     path: "https://discord.com/invite/defi"
//   },
//   {
//     name: "Youtube",
//     path: "https://youtube.com/c/defi_finance"
//   }
// ];

// const NavBar = () => {
//  return (
  // <nav className='header'>
  //    {/* Logo Image on Left */}
  //   <img
  //    src="logo192.png" // Replace with the actual path to your PNG logo image
  //    alt="Logo"
  //   />
  //   {/* menu icons list */}
  //   <ul className='d-flex m-0  gap-5 text-decoration-none align-items-center justify-content-center list-unstyled text-center  '>
  //     {
  //       menuItems.map((item, index) => (
  //         <li key={index} className='nav-item list-unstyled'> 
  //           <Link to={item.path}>{item.name}</Link>
  //         </li>
  //       ))
  //     }
  //     <div className=' gap-4 position-relative  d-flex align-items-center text-white'>
  //       {
  //         socialIcons.map((icon, index) => (
  //           <li key={index} className='nav-item gap-1  list-unstyled'>
  //             <a href={icon.path} target="_blank" rel="noopener noreferrer">
  //               <Icon icon={icon.name} size={20} />
  //             </a>
  //           </li>
  //         ))
  //       }
  //     </div>
  //     {/* Wallet connecter */}
  //     {/* Boo`tstrap Button on Right */}
  //     <Button  variant="secondary" size="lg" active className=' btn rounded-4 font-weight-bold bg-white text-warning px-4'>
  //       CONNECT WALLET
  //     </Button>
  //   </ul>
    
  // </nav>
//  );
// };

// export default NavBar;