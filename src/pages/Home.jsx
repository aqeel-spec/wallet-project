import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import MoussCybertruck from '../components/CyberTruck';

const Home = () => {
  return (
    <>
      <Container fluid="md" >
        <div className="svg-background">
          <MoussCybertruck />
        </div>
        <Row className="justify-content-md-center mt-5 ">
          <Col xs={12} md={6} className="text-center rounded-2  minting-grid">
            <div className='my-3 border-dotted '>
              <h1 className=' pb-2  w-100' >NFT MINTING</h1>
            </div>
            {/* total supply container */}
            <div>
              {/* map the list if you have */}
              <div className=" mt-5  d-flex minting-items justify-content-between px-4 ">
                <h3>Total Supply</h3>
                <p className='text-white'>0</p>
              </div>
              <div className="d-flex justify-content-between px-4 ">
                <h3>Max Per User</h3>
                <p className='text-white'>0</p>
              </div>
              <div className="d-flex justify-content-between px-4 ">
                <h3>Minted</h3>
                <p className='text-white'>0</p>
              </div>
            </div>
            {/* NFT Amount and button "MINT" */}
            <div className="px-2">
              <div className="d-flex minting-grid rounded-2  my-4 px-2 py-1 border border-2 border-white  justify-content-between px-2 ">
                <h2 className='text-font pl-2'>NFT Amount</h2>
                <Button  variant="secondary" size="md" active className=' px-5  btn rounded-2 font-weight-bold bg-white text-warning px-4'>
                  MINT
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-5 ">
          <Col xs={12} md={6} className="text-center rounded-2  minting-grid">
            <div className='my-3 border-dotted '>
              <h1 className=' pb-2  w-100' >TOTAL DEPOSIT IN CONTRACT</h1>
            </div>
            {/* total supply container */}
            <div className="d-flex my-3 justify-content-center  text-center ">
              <h2 className='text-font second-grid text-white '>0 <span className='  '>$AAI</span></h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
