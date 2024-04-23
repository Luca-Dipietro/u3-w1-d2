import { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import fantasy from "../data/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container fluid="xl">
        <Row>
          {fantasy.map((book) => (
            <Col key={book.asin} sm={6} md={3} lg={3} xl={3} className="mb-5">
              <Card>
                <Card.Img variant="top" src={book.img} className="card-img" />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Category: {book.category}</Card.Text>
                  <Card.Text>{book.price}$</Card.Text>
                  <Button variant="warning">Buy It</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
