import React from 'react'
import { CardBody, Card, CardTitle, CardText } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"

export default function MyCard({details}) {
    return (
        <Card>
            <CardBody className="text-center">
                <img src={details.picture?.large} height="150" width="150" className="rounded-circle img-thumbnail border-danger" />
            </CardBody>
            <CardTitle className="text-primary">
                <center>
                <h2>
                    <span className="pr-2">{details.name?.title}</span>
                    <span>{details.name?.first}</span>
                    <span>{details.name?.last}</span>
                </h2>
                </center>
            </CardTitle>
            <CardText>
            <CardTitle>
            <center>
                {details.email}
            </center>
            </CardTitle>
            </CardText>
        </Card>
    )
}
