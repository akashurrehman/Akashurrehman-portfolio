import {React} from 'react';

function Contact(){
    return (
        <>
        <div className="pt-5" style={{paddingLeft:"3rem"}} id="contact">
            Get in Touch
        </div>
        <Row>
            <Col xs={6}>
                <h2>Let's talk about everything!</h2>
                <p>To contact us, please email <a href="mailto:example@example.com">example@example.com</a></p>
            </Col>
            
            <Col xs={6}>
            
            </Col>
        </Row>

        </>
    )
}
export default Contact;