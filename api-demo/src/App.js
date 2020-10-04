import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import { Col, Container, Row } from 'reactstrap';
import MyCard from './MyCard'

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const {data} = await Axios.get(
      'https://randomuser.me/api/'
    )
    const details = data.results[0]
    setDetails(details);
  }

  useEffect(() => {
    fetchDetails();
  }, [])

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
