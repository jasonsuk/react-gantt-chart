import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

import { editTask, listSingleTask } from '../redux/actions/taskActions.js';
import { TASK_EDIT_RESET } from '../redux/constants/taskConstants.js';

import Loader from '../components/Loader.component.jsx';
import Message from '../components/Message.component.jsx';

const TaskEditPage = ({ match, history }) => {
    const editTaskId = match.params.id;
    const initialDateStr = new Date().toISOString().split('T')[0];

    const [editTaskName, setEditTaskName] = useState('');
    const [editStartDate, setEditStartDate] = useState(initialDateStr);
    const [editEndDate, setEditEndDate] = useState(initialDateStr);
    const [editPercentComplete, setEditPercentComplete] = useState(0);

    const dispatch = useDispatch();

    const taskListSingle = useSelector((state) => state.taskListSingle);
    const { loading, error, task } = taskListSingle;

    const taskEdit = useSelector((state) => state.taskEdit);
    const { success: successEdit } = taskEdit;

    useEffect(() => {
        if (successEdit) {
            dispatch({ type: TASK_EDIT_RESET });
            history.push('/summary');
        }

        if (!task) {
            dispatch(listSingleTask(editTaskId));
        } else {
            setEditTaskName(task[0].task_name);
            setEditStartDate(task[0].start_date.substring(0, 10));
            setEditEndDate(task[0].end_date.substring(0, 10));
            setEditPercentComplete(task[0].percent_complete);
            console.log(task[0]);
        }
    }, [dispatch, task, editTaskId, successEdit, history]);

    const submitHandler = (e) => {
        console.log('Editing');
        e.preventDefault();
        dispatch(
            editTask({
                taskId: editTaskId,
                taskName: editTaskName,
                startDate: editStartDate,
                endDate: editEndDate,
                percentComplete: editPercentComplete,
            })
        );
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error.message}</Message>
            ) : (
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                            <Form onSubmit={submitHandler}>
                                <Form.Group controlId="selectEditTaskId">
                                    <Form.Label>
                                        Editing Task {editTaskId}
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group controlId="editTaskName">
                                    <Form.Label>Task name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter task name"
                                        value={editTaskName}
                                        onChange={(e) =>
                                            setEditTaskName(e.target.value)
                                        }
                                    />
                                    <Form.Text className="text-muted">
                                        Please write a new task name if you wish
                                        to change it.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group
                                        controlId="editStartDate"
                                        as={Col}
                                        md={6}
                                    >
                                        <Form.Label>Start date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            placeholder="Enter start date"
                                            value={editStartDate}
                                            onChange={(e) =>
                                                setEditStartDate(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        controlId="editEndDate"
                                        as={Col}
                                        md={6}
                                    >
                                        <Form.Label>End date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            placeholder="Enter end date"
                                            value={editEndDate}
                                            onChange={(e) =>
                                                setEditEndDate(e.target.value)
                                            }
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="editPrecentComplete">
                                    <Form.Label>Percent completed</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter the progress in integer (0 to 100)"
                                        value={editPercentComplete}
                                        onChange={(e) =>
                                            setEditPercentComplete(
                                                e.target.value
                                            )
                                        }
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Save Changes
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default TaskEditPage;
