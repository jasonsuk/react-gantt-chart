import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup, Button, Container, Row, Col } from 'react-bootstrap';

import Gantt from '../components/Gantt.component.jsx';
import EditModal from '../components/editModal.component.jsx';
import DeleteModal from '../components/deleteModal.component.jsx';

import { createTask, listTasks } from '../redux/actions/taskActions.js';
import { TASK_CREATE_RESET } from '../redux/constants/taskConstants.js';

const HomePage = ({ history }) => {
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const dispatch = useDispatch();

    const taskList = useSelector((state) => state.taskList);
    const { tasks } = taskList;

    const taskCreate = useSelector((state) => state.taskCreate);
    const { success: successCreateTask } = taskCreate;

    useEffect(() => {
        if (successCreateTask) {
            setEditModal(true);
        } else {
            if (tasks) {
                console.log('Tasks loaded');
            } else {
                dispatch(listTasks());
            }
        }
    }, [dispatch, successCreateTask, tasks]);

    // Create new task //
    const createTaskHandler = () => {
        console.log('Creating task');
        dispatch(createTask());
    };

    // Edit task //
    const showEditModalHandler = () => {
        console.log('Editing task');
        setEditModal(true);
    };

    const editTaskHandler = () => {
        console.log('Edited task');
        setEditModal(false);
        history.push('/');
    };

    const hideEditModalHandler = () => {
        console.log('Hiding edit modal');
        setEditModal(false);
        dispatch({ type: TASK_CREATE_RESET });
        history.push('/');
    };

    // Delete task //
    const showDeleteModalHandler = () => {
        console.log('Deleting task');
        setDeleteModal(true);
    };

    const hideDeleteModalHandler = () => {
        console.log('Hiding delete modal');
        setDeleteModal(false);
        // dispatch({ type: TASK_CREATE_RESET });
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
                        <Button
                            variant="warning"
                            onClick={showEditModalHandler}
                        >
                            Edit Task
                        </Button>
                        <Button
                            variant="danger"
                            onClick={showDeleteModalHandler}
                        >
                            Delete Task
                        </Button>
                    </ButtonGroup>
                </Col>
                <Col md={4} className="text-right">
                    <strong>Curent date: {currentDate}</strong>
                </Col>
            </Row>

            <Gantt tasks={tasks} />
            <EditModal
                showEditModal={editModal}
                hideEditModalHandler={hideEditModalHandler}
                editTaskHandler={editTaskHandler}
                tasks={tasks && tasks}
            />
            <DeleteModal
                showDeleteModal={deleteModal}
                hideDeleteModalHandler={hideDeleteModalHandler}
                tasks={tasks && tasks}
                deleteModal={deleteModal}
            />
        </Container>
    );
};

export default HomePage;
