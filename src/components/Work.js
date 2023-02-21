import React from 'react';
import { Card,CardDeck, Col, Row } from 'react-bootstrap';
import './../Styles/work.css'
function Works(){
    const data = [
        {
          title: 'Card 1',
          image: 'https://via.placeholder.com/150',
          text: 'This is the text for Card 1'
        },
        {
          title: 'Card 2',
          image: 'https://via.placeholder.com/150',
          text: 'This is the text for Card 2'
        },
        {
          title: 'Card 3',
          image: 'https://via.placeholder.com/150',
          text: 'This is the text for Card 3'
        }
      ];
      
    return(
        <div className="pt-5" style={{paddingLeft:"3rem"}} id="Works">
            <Row>
                <Col xs={12}>
                    <h3>Recent Works I have Done</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <ul className='list-unstyled'>
                        <li className='Everything' href="#Everything">Everything</li>
                        <li className='Creative Work'> Creative Work</li>
                        <li className='Art'>Art</li>
                        <li className='Design'>Design</li>
                        <li className='Branding'>Branding</li>
                    </ul>
                </Col>
            </Row>
            {/* Fetch Data here  from Backend*/}
            <Row>
                {data.map(card => (
                    <Col xs={12} md={4} key={card.title}>
                    <Card>
                        <Card.Img variant="top" src={card.image} />
                        <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    ); 
}
export default Works;