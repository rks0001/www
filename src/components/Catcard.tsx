import React from "react";
import "../styles/Catcard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Catcard = (props: any) => {
  return (
    <>
      <Card className="card1" style={{ width: "18rem" }}>
        <Card.Img className="cardimg" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desp}</Card.Text>
          <Button className="btnshop" variant="primary" href={props.link}>
            Shop
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Catcard;
