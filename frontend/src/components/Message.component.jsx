import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Message = ({ children }) => {
    return (
        <Jumbotron fluid>
            <Container className="text-center">
                <h2>
                    <i className="fas fa-wrench"> Work in progress ... </i>
                </h2>
                <p>{children}</p>
            </Container>
        </Jumbotron>
    );
};

export default Message;
