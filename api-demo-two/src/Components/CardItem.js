import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

export default function CardItem({product, addInCart}) {
    return (
        <Card className="mt-2 mb-1">
            <CardImg
            top height="250"
            width="100%"
            src={product.smallImage}
            />
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">{product.productPrice}</CardText>
                <Button color="success" onClick={()=>addInCart(product)}>Buy Now</Button>
            </CardBody>
        </Card>
    )
}
