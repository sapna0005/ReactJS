import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import k1 from "./tshirt1.webp"
import k2 from "./tshirt2.webp"
import k3 from "./tshirt3.webp"
import k4 from "./tshirt4.webp"
import k5 from "./tshirt5.webp"
import k6 from "./tshirt6.webp"
import k7 from "./tshirt7.webp"
import k8 from "./tshirt8.webp"





const Tshirt=()=>{
    const [selectedBrands, setSelectedBrands] = useState([]);

  const brands = [
    "Allen Solly",
    "ADRO",
    "ADIDAS",
    "Arrow Sport",
    "Roadster",
    "COLOR CAPITAL"
  ];
  const category=[
    "Tshirts",
    "Lounge Tshirts"
  ]

  const handleCheckboxChange = (brand) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((b) => b !== brand)
        : [...prevSelected, brand]
    );
  };
  const handleCheckbox = (category) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((a) => a !== category)
        : [...prevSelected, category]
    );
  };
    return(
<>
<h6 style={{margin:"20px"}}>Men T-Shirts</h6>
<h6 style={{margin:"30px"}}>FILTERS</h6>
<hr /> 

<div style={{display:"flex"}}>
<Sidebar>
  <Menu>
  <SubMenu label="CATEGORIES" style={{fontSize:"14px", fontWeight:"bold"}}>
    <div className="category">
            {category.map((category) => (
              <MenuItem key={category}>
                <label>
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedBrands.includes(category)}
                    onChange={() => handleCheckbox(category)}
                    style={{ marginRight: "8px" }}
                  />
                  {category}
                </label>
              </MenuItem>
            ))}
          </div>
    </SubMenu>
    <SubMenu label="BRAND" style={{fontSize:"14px", fontWeight:"bold"}}>
    <div className="brand">
            {brands.map((brand) => (
              <MenuItem key={brand}>
                <label>
                  <input
                    type="checkbox"
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleCheckboxChange(brand)}
                    style={{ marginRight: "8px" }}
                  />
                  {brand}
                </label>
              </MenuItem>
            ))}
          </div>
    </SubMenu>
    
    
</Menu>
</Sidebar>


 

<div className='tshirtimg' >

<Container >
   <Row>
    <Col>
      <Card style={{ width: '13rem' }}>
      <Link to="/TshirtDetails">
       <Card.Img variant="top" src={k2} style={{height:"227px"}}/>
       </Link>
         <Card.Body>
           <Card.Title>Free Gifts ₹999</Card.Title>
             <Card.Text>
               Range Starts @₹425
             </Card.Text>
           </Card.Body>
      </Card>
    </Col>
  </Row>
 </Container>

 <Container >
   <Row>
    <Col>
      <Card style={{ width: '13rem' }}>
       <Card.Img variant="top" src={k1} style={{height:"227px"}}/>
         <Card.Body>
           <Card.Title>Free Gifts ₹999</Card.Title>
             <Card.Text>
               Range Starts @₹425
             </Card.Text>
           </Card.Body>
      </Card>
    </Col>
  </Row>
 </Container>


    <Container >
   <Row>
    <Col>
      <Card style={{ width: '13rem' }}>
       <Card.Img variant="top" src={k3} style={{height:"227px"}}/>
         <Card.Body>
           <Card.Title>Free Gifts ₹999</Card.Title>
             <Card.Text>
               Range Starts @₹425
             </Card.Text>
           </Card.Body>
      </Card>
    </Col>
  </Row>
 </Container>

 <Container >
   <Row>
    <Col>
      <Card style={{ width: '13rem' }}>
       <Card.Img variant="top" src={k4} style={{height:"227px"}}/>
         <Card.Body>
           <Card.Title>Free Gifts ₹999</Card.Title>
             <Card.Text>
               Range Starts @₹425
             </Card.Text>
           </Card.Body>
      </Card>
    </Col>
  </Row>
 </Container>

  <Container >
   <Row>
    <Col>
      <Card style={{ width: '13rem' }}>
       <Card.Img variant="top" src={k5} />
         <Card.Body>
           <Card.Title>Free Gifts ₹999</Card.Title>
             <Card.Text>
               Range Starts @₹425
             </Card.Text>
           </Card.Body>
      </Card>
    </Col>
  </Row>
 </Container>

 <Container >
   <Row>
    <Col>
      <Card style={{ width: '13rem' }}>
       <Card.Img variant="top" src={k6} style={{height:"227px"}}/>
         <Card.Body>
           <Card.Title>Free Gifts ₹999</Card.Title>
             <Card.Text>
               Range Starts @₹425
             </Card.Text>
           </Card.Body>
      </Card>
    </Col>
  </Row>
 </Container>

 <Container >
   <Row>
    <Col>
      <Card style={{ width: '13rem' }}>
       <Card.Img variant="top" src={k7} style={{height:"227px"}}/>
         <Card.Body>
           <Card.Title>Free Gifts ₹999</Card.Title>
             <Card.Text>
               Range Starts @₹425
             </Card.Text>
           </Card.Body>
      </Card>
    </Col>
  </Row>
 </Container>

 <Container >
   <Row>
    <Col>
      <Card style={{ width: '13rem'}}>
       <Card.Img variant="top" src={k8} style={{maxHeight:"227px"}}/>
         <Card.Body>
           <Card.Title>Free Gifts ₹999</Card.Title>
             <Card.Text>
               Range Starts @₹425
             </Card.Text>
           </Card.Body>
      </Card>
    </Col>
  </Row>
 </Container>
</div> 
</div>

</>
    )
}
export default Tshirt;