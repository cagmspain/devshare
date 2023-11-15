import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent(data) {
	//console.log(data.data);
	return (
		<Card className="text-center p-2 m-2" style={{ width: "18rem" }}>
			<Card.Img variant="top" src={data.data.images[0]} />
			<Card.Body>
				<Card.Title>{data.data.title}</Card.Title>

				<Card.Text>{data.data.category.name}</Card.Text>
				<Card.Text>${data.data.price}</Card.Text>
				<Button variant="primary">Detail</Button>
			</Card.Body>
		</Card>
	);
}

export default CardComponent;
