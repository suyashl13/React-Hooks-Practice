import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import CardItem from "./CardItem";


const BuyPage = ({ addInCart }) => {
    const localurl = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";
    const [product, setProduct] = useState([]);

    const fetchPhotos = async () => {
        const { data } = await Axios.get(localurl);

        const { photos } = data;
        const allProducts = photos.map(photo => ({
            smallImage : photo.src.medium,
            tinyImage : photo.src.tiny,
            productName: random.word(),
            productPrice : commerce.price(),
            id : random.uuid()
        }))

        setProduct(allProducts);
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    console.log(product)
    return <Container fluid>
        <h1 className="text-success text-center">Buy Page</h1>
        <Row>
            {
                product.map(prod => 
                    <Col md={4} key={product.id}>
                        <CardItem product={prod} addInCart={addInCart}/>
                    </Col>
                )
            }
        </Row>
    </Container>

};

export default BuyPage;
