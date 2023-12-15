import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

const NotFound = () => {
  return (
    <section>
      <Card className="NotFound">
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Page Does Not Exist!
            </h3>
            <div className="Links">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/add-item">Add Item</Link>
              <Link to="/snacks">Snacks</Link>
              <Link to="/drinks">Drinks</Link>
            </div>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default NotFound;
