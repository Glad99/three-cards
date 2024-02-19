import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "../components/NavBar";
import { Button, Card } from "react-bootstrap";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <h1 style={{
          textAlign: "center",
          marginTop: "10px"
        }} >Flower card</h1>
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItem: "center",
          marginTop: "20px"
        }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/doyqveod1/image/upload/v1708360128/react/808b959b-b65c-4122-9699-e9b86a5efd0a.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Buy here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/doyqveod1/image/upload/v1708360321/react/457d9af2-1b61-43df-9ec4-e054f3ffa12e.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Buy here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/doyqveod1/image/upload/v1708360384/react/3585fb10-ae15-4d2a-82ee-b9a3fa698322.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Buy here</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
