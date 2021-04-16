import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Container>
            <Spinner
                animation="border"
                role="status"
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '40%',
                    margin: 'auto',
                    width: '100px',
                    height: '100px',
                }}
            >
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Container>
    );
};

export default Loader;
