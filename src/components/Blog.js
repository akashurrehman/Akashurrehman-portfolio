import {React} from 'react';
import { Row,Col,Card } from 'react-bootstrap';

function Blog(){
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
    return (
        <>
        <div className="pt-5" style={{paddingLeft:"3rem"}} id="Blog">
            Latest Posts
        </div>
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
    </>
    )

}
export default Blog;