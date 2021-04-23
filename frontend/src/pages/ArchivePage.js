import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';

import Loader from '../components/Loader.component.jsx';
import Message from '../components/Message.component.jsx';

import { listArchives } from '../redux/actions/archiveActions.js';

const ArchivePage = () => {
    const dispatch = useDispatch();

    const archiveList = useSelector((state) => state.archiveList);
    const { loading, error, archives } = archiveList;

    useEffect(() => {
        if (!archives) {
            dispatch(listArchives());
        }
    }, [dispatch, archives]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error.message}</Message>
            ) : (
                <Container>
                    <Row className="align-items-center my-4">
                        <Col>
                            <h3>Archived tasks</h3>
                        </Col>
                        <Col className="text-right">
                            <p className="remark">
                                All the tasks that have been completed or
                                deleted are shown here
                            </p>
                        </Col>
                    </Row>
                    <Table striped bordered hover className="text-center">
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
                            {archives &&
                                archives.map((archive) => (
                                    <tr key={archive.task_id}>
                                        <td>{archive.task_id}</td>
                                        <td>{archive.task_name}</td>
                                        <td>
                                            {archive.start_date.substring(
                                                0,
                                                10
                                            )}
                                        </td>
                                        <td>
                                            {archive.end_date.substring(0, 10)}
                                        </td>
                                        <td>
                                            {archive.completed_date.substring(
                                                0,
                                                10
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Container>
            )}
        </>
    );
};

export default ArchivePage;
