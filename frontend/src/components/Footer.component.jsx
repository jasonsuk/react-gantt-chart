import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Card className="bg-dark text-white text-center my-4 p-2">
                <Card.Text>© 2021 Junghoon Suk. ALL RIGHTS RESERVED</Card.Text>
            </Card>
        </Container>
    );
};

export default Footer;
