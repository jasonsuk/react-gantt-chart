import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup, Button, Container, Row, Col } from 'react-bootstrap';

import Gantt from '../components/Gantt.component.jsx';
import EditModal from '../components/editModal.component.jsx';
import DeleteModal from '../components/deleteModal.component.jsx';

import { createTask, listTasks } from '../redux/actions/taskActions.js';

const HomePage = () => {
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const dispatch = useDispatch();

    const taskList = useSelector((state) => state.taskList);
    const { tasks } = taskList;

    const taskCreate = useSelector((state) => state.taskCreate);
    const { success: successCreateTask, task: createdTask } = taskCreate;

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

    const hideEditModalHandler = () => {
        console.log('Hiding edit modal');
        setEditModal(false);
        window.location.reload();
    };

    // Delete task //
    const showDeleteModalHandler = () => {
        console.log('Deleting task');
        setDeleteModal(true);
    };

    const hideDeleteModalHandler = () => {
        console.log('Hiding delete modal');
        setDeleteModal(false);
        window.location.reload();
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
                tasks={tasks && tasks}
                createdTask={createdTask ? createdTask : null}
            />
            <DeleteModal
                showDeleteModal={deleteModal}
                hideDeleteModalHandler={hideDeleteModalHandler}
                tasks={tasks && tasks}
            />
        </Container>
    );
};

export default HomePage;
