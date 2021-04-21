import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const ArchivePage = () => {
    return (
        <Container>
            <Row className="align-items-center my-4">
                <Col>
                    <h3>Archived tasks</h3>
                </Col>
                <Col className="text-right">
                    <p className="remark">
                        All the tasks that have been completed or deleted are
                        shown here
                    </p>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Task id</th>
                        <th>Task name</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Completed date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default ArchivePage;
