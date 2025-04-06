import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import myimg from "./image/logo.jpeg";
import Carousel from 'react-bootstrap/Carousel';
import c2 from "./image/bella vita.avif";
import c3 from "./image/caffeine.avif";
import c4 from "./image/plum.avif";
import c5 from "./image/lakme.avif";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import n1 from "./image/forestessential.avif";
import n2 from "./image/pixi.avif";
import n3 from "./image/obagi.avif";
import n4 from "./image/neutrogena.avif";
import n5 from "./image/joseon.avif";
import n6 from "./image/earth.avif";
import n7 from "./image/cerave.avif";
import a1 from "./image/offer.avif";
import Image from 'react-bootstrap/Image';
import b1 from "./image/SERUM.avif";
import b2 from "./image/eyecare.avif";
import b3 from "./image/mask.avif";
import b4 from "./image/toners.avif";
import b5 from "./image/Moisturisers.avif";
import b6 from "./image/cleanser.avif";
import c1 from "./image/suncare.avif";
import d1 from "./image/skin loving.avif";
import d2 from "./image/fight pollution.avif";
import d3 from "./image/hey.avif";
import d4 from "./image/meet.avif";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import Tshirt from './Mensection/Tshirt';

const App = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <BrowserRouter>
      <>
        <Navbar expand="lg" style={{ zIndex: 999, backgroundColor: "white", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }}>
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src={myimg}
                width="90"
                height="60"
                className="d-inline-block align-top"
                alt="myntra logo"
              />
            </Navbar.Brand>

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 nav-links"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <div
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  style={{ position: 'relative' }}
                >
                  <Nav.Link href="#" style={{ fontSize: '14px', fontWeight: "bold" }}>
                    MEN
                  </Nav.Link>

                  {showDropdown && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: 'white',
                        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
                        padding: '10px',
                        zIndex: 1000
                      }}
                    >
                      <p style={{ color: "red", fontSize: "14px", marginBottom: "8px" }}>TopWear</p>
                      <ul className="topwear-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li><Link to="/tshirt">T-Shirts</Link></li>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Sweatshirts</li>
                        <li>Sweaters</li>
                        <li>Jackets</li>
                        <li>Blazer & Coats</li>
                      </ul>
                    </div>
                  )}
                </div>

                <Nav.Link href="#" style={{ fontSize: '14px', fontWeight: "bold" }}>WOMEN</Nav.Link>
                <Nav.Link href="#" style={{ fontSize: '14px', fontWeight: "bold" }}>KIDS</Nav.Link>
                <Nav.Link href="#" style={{ fontSize: '14px', fontWeight: "bold" }}>BEAUTY</Nav.Link>
                <Nav.Link href="#" style={{ fontSize: '14px', fontWeight: "bold" }}>GENZ</Nav.Link>
              </Nav>

              <Form className="d-flex" style={{ marginRight: "200px" }}>
                <Form.Control
                  type="search"
                  placeholder="Search for products,brands and more"
                  className="me-2"
                  aria-label="Search" style={{ width: "400px", backgroundColor: "whitesmoke", paddingLeft: "20px", fontSize: "14px" }}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={
            <>
              <Carousel fade style={{ marginTop: "30px" }}>
                <Carousel.Item >
                  <img src={c2} style={{ height: "400px", width: "100%" }} />
                </Carousel.Item >

                <Carousel.Item >
                  <img src={c3} style={{ height: "400px", width: "100%" }} />
                </Carousel.Item >

                <Carousel.Item >
                  <img src={c4} style={{ height: "400px", width: "100%" }} />
                </Carousel.Item >

                <Carousel.Item >
                  <img src={c5} style={{ height: "400px", width: "100%" }} />
                </Carousel.Item >
              </Carousel>
              <br />
              <br />

              <div>
                <img src={a1} style={{ height: "150px", width: "100%", padding: "25px" }} />
              </div>

              <br /><br />

              <div className='brands'>
                <h3>Brands You Will Love</h3>
                <p>Top Skincare Brands</p>
              </div>


              <div className='cards'>
                <Container>
                  <Row>
                    <Col><Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={n1} />
                      <Card.Body>
                        <Card.Title>Free Gifts ₹999</Card.Title>
                        <Card.Text>
                          Range Starts @₹425
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col><Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={n2} />
                      <Card.Body>
                        <Card.Title>Gift On All Orders</Card.Title>
                        <Card.Text>
                          Glow essential!!
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col><Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={n3} />
                      <Card.Body>
                        <Card.Title>Brightens The Skin</Card.Title>
                        <Card.Text>
                          Reduces Dark Spots
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col><Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={n4} />
                      <Card.Body>
                        <Card.Title>Upto 35% Off</Card.Title>
                        <Card.Text>
                          Gift On New Launches
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>
              </div>

              <div className='card1'>
                <Container>
                  <Row>
                    <Col><Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={n5} />
                      <Card.Body>
                        <Card.Title>Free Gift on ₹1400</Card.Title>
                        <Card.Text>
                          Hydrates in a Swipe!!
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col><Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={n6} />
                      <Card.Body>
                        <Card.Title>Upto 25% Off</Card.Title>
                        <Card.Text>
                          Sun Care Must Haves!!
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col><Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={n7} />
                      <Card.Body>
                        <Card.Title>Upto 10% Off</Card.Title>
                        <Card.Text>
                          Summer SkinCare
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>
              </div>
              <br /><br />

              <div className='brands'>
                <h3>The Skincare Store</h3>
                <p>Discover A Limitless Range Of Skincare</p>
              </div>

              <Container className='skincare'>
                <Row>
                  <Col >
                    <Card style={{ width: '10rem', border: 'none' }}>
                      <Image src={b1} roundedCircle style={{ width: '150px', height: '150px' }} />
                      <Card.Body>
                        <Card.Title> <p style={{ fontSize: "18px", padding: "3px" }}>Serum & <br />Treatments</p></Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                    <Card style={{ width: '10rem', border: 'none' }}>
                      <Image src={b2} roundedCircle style={{ width: '150px', height: '150px' }} />
                      <Card.Body>
                        <Card.Title> <p style={{ fontSize: "18px", paddingLeft: "20px" }}>Eye Care</p></Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                    <Card style={{ width: '10rem', border: 'none' }}>
                      <Image src={b3} roundedCircle style={{ width: '150px', height: '150px' }} />
                      <Card.Body>
                        <Card.Title> <p style={{ fontSize: "18px" }}>Masks & Peels</p></Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                    <Card style={{ width: '10rem', border: 'none' }}>
                      <Image src={b4} roundedCircle style={{ width: '150px', height: '150px' }} />
                      <Card.Body>
                        <Card.Title> <p style={{ fontSize: "18px", paddingLeft: "40px" }}>Toners</p></Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                    <Card style={{ width: '10rem', border: 'none' }}>
                      <Image src={b5} roundedCircle style={{ width: '150px', height: '150px' }} />
                      <Card.Body>
                        <Card.Title> <p style={{ fontSize: "18px", paddingLeft: "20px" }}>Moisturisers</p></Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                    <Card style={{ width: '10rem', border: 'none' }}>
                      <Image src={b6} roundedCircle style={{ width: '150px', height: '150px' }} />
                      <Card.Body>
                        <Card.Title> <p style={{ fontSize: "18px", paddingLeft: "40px" }}>Cleanser</p></Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>

              <div>
                <img src={c1} style={{ height: "110px", width: "100%" }} />
              </div>
              <br /><br />

              <div className='brands'>
                <h3>Your Skincare Guides</h3>
                <p>Tips & Advice For Your Unique Skin</p>
              </div>

              <div className='cards'>
                <Container>
                  <Row>
                    <Col><Card style={{ width: '16rem' }}>
                      <Card.Img variant="top" src={d1} />
                      <Card.Body>
                        <Card.Title>Skin Loving Perfumes</Card.Title>
                        <Card.Text>
                          Fight Every Skin <br />Concerns
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col><Card style={{ width: '16rem' }}>
                      <Card.Img variant="top" src={d2} />
                      <Card.Body>
                        <Card.Title>Fight Pollution & Dirt</Card.Title>
                        <Card.Text>
                          Do away with daily <br />grime
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col><Card style={{ width: '16rem' }}>
                      <Card.Img variant="top" src={d3} />
                      <Card.Body>
                        <Card.Title>Hey Hyaluronic!
                        </Card.Title>
                        <Card.Text>
                          The powerhouse of <br />hydration
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col><Card style={{ width: '16rem' }}>
                      <Card.Img variant="top" src={d4} />
                      <Card.Body>
                        <Card.Title>Meet Niacinamide
                        </Card.Title>
                        <Card.Text>
                          Treat dark spots & <br />pigmentation
                        </Card.Text>
                      </Card.Body>
                    </Card></Col>
                  </Row>
                </Container>

              </div>
            </>
          } />
          <Route path="/tshirt" element={<Tshirt />} />
        </Routes>

        <footer style={{ backgroundColor: '#f3f3f3', padding: '2rem 0', marginTop: '3rem' }}>
          <Container>
            <Row>
              <Col md={3}>
                <h6>ONLINE SHOPPING</h6>
                <ul className="footer-list">
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                  <li>Home & Living</li>
                </ul>
              </Col>
              <Col md={3}>
                <h6>CUSTOMER POLICIES</h6>
                <ul className="footer-list">
                  <li>Shipping</li>
                  <li>Cancellation</li>
                  <li>Returns</li>
                  <li>Privacy Policy</li>
                </ul>
              </Col>
              <Col md={3}>
                <h6>USEFUL LINKS</h6>
                <ul className="footer-list">
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Site Map</li>
                </ul>
              </Col>
              <Col md={3}>
                <h6>KEEP IN TOUCH</h6>
                <div className="social-icons">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTwitter />
                </div>
                <p style={{ marginTop: '1rem', fontSize: '14px' }}>© 2025 Myntra Clone. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;