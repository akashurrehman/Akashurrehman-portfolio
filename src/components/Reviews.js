import React from 'react';
import { Row ,Col,Carousel,Card} from 'react-bootstrap';

function Reviews() {
    const data = [
        {
          title: 'Item 1',
          text: 'This is the text for Item 1'
        },
        {
          title: 'Item 2',
          text: 'This is the text for Item 2'
        },
        {
          title: 'Item 3',
          text: 'This is the text for Item 3'
        }
      ];
      
    return (
        <div className="pt-5" style={{paddingLeft:"3rem"}} id="Reviews">
            <Row>
                <Col xs={12}>
                    <h2>Clients & Reviews</h2>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                </Col>
                <Col md={6}>
                    <Carousel>
                    {data.map(item => (
                        <Carousel.Item key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Carousel.Item>
                    ))}
                    </Carousel>
                </Col>
                <Col md={3}>
                </Col>
            </Row>
        </div>
    );
}
export default Reviews;
