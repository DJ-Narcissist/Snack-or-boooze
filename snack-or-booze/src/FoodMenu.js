import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css"; // Assuming this is a custom CSS file for styling
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks= [], drinks = [], title }) {
  console.log("Snacks", snacks)
  console.log("Drinks", drinks)


  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {snacks.map(snack => (
              <Link to={`/${title}/${snack.id}`} key={snack.id}>
                <ListGroupItem>{snack.name}</ListGroupItem>
              </Link>
            ))}
            {drinks.map(drink => (
              <Link to={`/${title}/${drink.id}`} key={drink.id}>
                <ListGroupItem>{drink.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
