import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';

function App() {
 
  return (
    <div className="main">
<Header/> 
 <Container fluid>
<Container>
  <Row>
    <Col className='col-12 text-center py-4'>
    <h1>Our Courses</h1>
    </Col>
  </Row>
  <Row>
    <Col lg="3" md="6">
     
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Course1</Card.Title>
        <Card.Text>
          MERN Stack development 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
     <Col lg="3" md="6">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Course2</Card.Title>
        <Card.Text>
          Java Full-Stack development 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      <Col lg="3" md="6">
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Course3</Card.Title>
        <Card.Text>
        Python Full-Stack development 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
       <Col lg="3" md="6">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Course1</Card.Title>
        <Card.Text>
         Devops 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
  </Row>
</Container>
 </Container>
<Footer/> 
    </div>
  );
}

export default App;
 