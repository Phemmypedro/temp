import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imagepath} />
      <Card.Body>
        <Card.Title>{props.ProductName}</Card.Title>
        <Card.Text>
          {props.description}
          {props.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
