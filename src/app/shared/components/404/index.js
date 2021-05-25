import React from "react";
import "./style.css";
import { Alert } from "react-bootstrap";

const Error404 = ({ error }) => {
  return (
    <>
      <Alert variant="danger">
        <Alert.Heading>Opps! You got an error!</Alert.Heading>
        <p>{error}</p>
      </Alert>
    </>
  );
};

export default Error404;
