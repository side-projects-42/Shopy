import React from "react";
import { Card } from "react-bootstrap";

export function ProductCard({ data, setOrdered }) {
  console.log(data);





  return (
    <Card className="card-container">
      <Card.Img className="image-container" src={data.img} />
      <Card.Body className="d-flex flex-column">
        <div>
          <Card.Title className="font-weight-bold">{data.name}</Card.Title>
        </div>
        <Card.Text className="text-secoundary">{data.price}</Card.Text>
        <Card.Text className="text-secoundary">{data.light}</Card.Text>
        <Card.Text className="text-secoundary">{data.description}</Card.Text>
       <button  onClick={() => this.props.addToCart(data) } >{data.description}
      
        </button>

      </Card.Body>
    </Card>
  );
}

// <div className="plant-card" key={plant.id} data-testid="plant-card">
// <img className="plant-image" src={plant.img} alt={plant.name} />
// <div className="plant-details">
//   <h2 className="plant-name">{plant.name}</h2>
//   <p className="plant-scientific-name">{plant.scientificName}</p>
//   <p>{plant.description}</p>
//   <div className="plant-bottom-row">
//     <p>${plant.price}</p>
//     <p>☀️ {plant.light}</p>
//     <p>💦 {plant.watering}x/month</p>
//   </div>
//   <button
//     className="plant-button"
//     onClick={() => this.props.addToCart(plant)}
//   >
//     Add to cart
//   </button>
// </div>
// </div>
