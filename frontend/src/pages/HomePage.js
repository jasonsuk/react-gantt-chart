import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup, Button, Container, Row, Col } from 'react-bootstrap';

import Gantt from '../components/Gantt.component.jsx';
import EditModal from '../components/Modal.component.jsx';

import { createTask, listTasks } from '../redux/actions/taskActions.js';
import { TASK_CREATE_RESET } from '../redux/constants/taskConstants.js';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const taskCreate = useSelector((state) => state.taskCreate);
    const { success: successCreateTask } = taskCreate;

    useEffect(() => {
        if (successCreateTask) {
            dispatch({ type: TASK_CREATE_RESET });
            setShowModal(true);
        } else {
            dispatch(listTasks());
        }
    }, [dispatch, successCreateTask, setShowModal]);

    const createTaskHandler = () => {
        console.log('Creating task');
        dispatch(createTask());
    };
    const editTaskHandler = () => {
        console.log('Editing task');
        setShowModal(true);
    };
    const deleteTaskHandler = () => {
        console.log('Deleting task');
    };

    const currentDate = new Date().toDateString();

    return (
        <Container>
            <Row className="align-items-md-center">
                <Col md={8}>
                    <ButtonGroup className="my-4">
                        <Button variant="success" onClick={createTaskHandler}>
                            Create Task
                        </Button>
                        <Button variant="warning" onClick={editTaskHandler}>
                            Edit Task
                        </Button>
                        <Button variant="danger" onClick={deleteTaskHandler}>
                            Delete Task
                        </Button>
                    </ButtonGroup>
                </Col>
                <Col md={4} className="text-right">
                    <strong>Curent date: {currentDate}</strong>
                </Col>
            </Row>

            <Gantt />
            <EditModal show={showModal} />
        </Container>
    );
};

export default HomePage;
