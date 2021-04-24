import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

import { editTask } from '../redux/actions/taskActions.js';
import { TASK_EDIT_RESET } from '../redux/constants/taskConstants';

import ErrorMessage from './ErrorMessage.component.jsx';

const EditModal = ({
    showEditModal,
    hideEditModalHandler,
    tasks,
    taskCreated,
}) => {
    // Initial date string with the format of 'yyyy-MM-dd'

    const initialDateStr = new Date().toISOString().split('T')[0];

    const [editTaskId, setEditTaskId] = useState(undefined);
    const [editTaskName, setEditTaskName] = useState('');
    const [editStartDate, setEditStartDate] = useState(initialDateStr);
    const [editEndDate, setEditEndDate] = useState(initialDateStr);
    const [editPercentComplete, setEditPercentComplete] = useState(0);

    const dispatch = useDispatch();

    const taskEdit = useSelector((state) => state.taskEdit);
    const { success: successEdit, error: errorEdit } = taskEdit;

    useEffect(() => {
        if (successEdit) {
            // Reset task edit state
            dispatch({ type: TASK_EDIT_RESET });

            // Close the modal
            hideEditModalHandler();

            // Reload page to update the change
            window.location.reload();
        }
    }, [dispatch, successEdit, hideEditModalHandler]);

    const editTaskHandler = (id) => {
        dispatch(
            editTask({
                taskId: id,
                taskName: editTaskName,
                startDate: editStartDate,
                endDate: editEndDate,
                percentComplete: editPercentComplete,
            })
        );
    };

    return (
        <Modal show={showEditModal} onHide={hideEditModalHandler}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {taskCreated ? 'Create' : 'Edit'} task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {errorEdit && (
                        <ErrorMessage variant="danger">
                            {errorEdit}
                        </ErrorMessage>
                    )}
                    <Form.Group controlId="selectEditTaskId">
                        <Form.Label>
                            Select task that you want to change
                        </Form.Label>
                        {taskCreated ? (
                            <Form.Text style={{ fontSize: '15px' }}>
                                Task {taskCreated[0].task_id}
                            </Form.Text>
                        ) : (
                            <Form.Control
                                as="select"
                                value={
                                    editTaskId ? editTaskId : 'None selected'
                                }
                                onChange={(e) => setEditTaskId(e.target.value)}
                            >
                                <option>-- None selected --</option>
                                {tasks &&
                                    tasks.map((task) => (
                                        <option key={task.task_id}>
                                            {task.task_id}: {task.task_name}
                                        </option>
                                    ))}
                            </Form.Control>
                        )}
                    </Form.Group>
                    <Form.Group controlId="editTaskName">
                        <Form.Label>Task name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter task name"
                            value={editTaskName}
                            onChange={(e) => setEditTaskName(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            Please write a new task name if you wish to change
                            it.
                        </Form.Text>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group controlId="editStartDate" as={Col} md={6}>
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
                        <Form.Group controlId="editEndDate" as={Col} md={6}>
                            <Form.Label>End date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter end date"
                                value={editEndDate}
                                onChange={(e) => setEditEndDate(e.target.value)}
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
                                setEditPercentComplete(e.target.value)
                            }
                        />
                    </Form.Group>
                    <Row className="text-right">
                        <Col>
                            <Button
                                variant="secondary"
                                onClick={hideEditModalHandler}
                                className="mr-2"
                            >
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() =>
                                    editTaskHandler(
                                        taskCreated
                                            ? taskCreated[0].task_id
                                            : editTaskId
                                    )
                                }
                            >
                                Save Changes
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
};

export default EditModal;
