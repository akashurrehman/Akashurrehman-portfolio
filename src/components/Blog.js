import {React} from 'react';
import { Row,Col,Card,Button } from 'react-bootstrap';

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
        <div className="pt-5" style={{paddingLeft:"3rem",paddingTop:"6rem", backgroundColor:"#F9F9FF",paddingBottom:"3rem"}} id="Blog">
            Latest Posts
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
        <Col xs={12} md={12} style={{justifyContent:"center",alignItems:"center"}}>
        <Button variant="primary" type="submit" className='mt-3 px-5' style={{backgroundColor:"#FE7485",borderRadius:"14px",borderColor:"#FE7485"}}>
              Show All Blogs
        </Button>
        </Col>
    </Row>
    </div>
    )
}
export default Blog;