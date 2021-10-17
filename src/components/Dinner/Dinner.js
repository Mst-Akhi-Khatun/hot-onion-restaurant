import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useMeals from '../../hooks/useMeals';

const Dinner = () => {
    const [meals, setMeals] = useMeals();
    return (
        <Row xs={1} md={3} className="g-4">
            {
                meals.slice(12, 18).map(meal => <Col>
                    <Card>
                      <Card.Img variant="top" src={meal.img} className="w-50 mx-auto" />
                      <Card.Body className="text-center">
                        <Card.Title>{meal.title}</Card.Title>
                        <Card.Text>
                          {meal.detail}                          
                        </Card.Text>
                        <h5>${meal.price}</h5>
                      </Card.Body>
                    </Card>
                  </Col>)
            }
        </Row>
    );
};

export default Dinner;