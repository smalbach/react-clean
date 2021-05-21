import React from "react";
import { Container, Row } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};
