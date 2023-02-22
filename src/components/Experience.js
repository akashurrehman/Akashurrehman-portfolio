import React from 'react';
import { Card, Col,Row } from 'react-bootstrap';

function Experience() {

    return (
        <div className="pt-5" style={{paddingLeft:"3rem",paddingTop:"6rem", backgroundColor:"#F9F9FF",paddingBottom:"3rem"}} id="Experience">
            <Row>
                <Col xs={12}>
                    <h3>Experience</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>                   
                    <Card>
                        <div className='Bachelors'>
                            <h2>2019-Present</h2>
                            <h1>Bachelor's Degree</h1>
                            <p>lorem</p>
                        </div>
                        <div className='Bachelors'>
                            <h2>2019-Present</h2>
                            <h1>Bachelor's Degree</h1>
                            <p>lorem</p>
                        </div>
                        <div className='Bachelors'>
                            <h2>2019-Present</h2>
                            <h1>Bachelor's Degree</h1>
                            <p>lorem</p>
                        </div>
                    </Card>   
                </Col>
                <Col xs={12} md={6}>
                <Card>
                        <div className='Bachelors'>
                            <h2>2019-Present</h2>
                            <h1>Bachelor's Degree</h1>
                            <p>lorem</p>
                        </div>
                        <div className='Bachelors'>
                            <h2>2019-Present</h2>
                            <h1>Bachelor's Degree</h1>
                            <p>lorem</p>
                        </div>
                        <div className='Bachelors'>
                            <h2>2019-Present</h2>
                            <h1>Bachelor's Degree</h1>
                            <p>lorem</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Experience;

