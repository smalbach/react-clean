import React, { useContext, useEffect } from "react";
import ProductContext from "../../../core/redux/product/productContext";
import Product from "./Product";
import { Container, Row } from "react-bootstrap";

const ListProducts = () => {
  const productContext = useContext(ProductContext);
  const { getProductsfn, products } = productContext;

  useEffect(() => {
    getProductsfn();
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ListProducts;
