import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

import { editTask } from '../redux/actions/taskActions.js';
import { TASK_EDIT_RESET } from '../redux/constants/taskConstants';

const EditModal = ({ showEditModal, hideEditModalHandler, tasks }) => {
    // Initial date string with the format of 'yyyy-MM-dd'
    const initialDateStr = new Date().toISOString().split('T')[0];

    const [editTaskId, setEditTaskId] = useState(1);
    const [editTaskName, setEditTaskName] = useState('');
    const [editResource, setEditResource] = useState('');
    const [editStartDate, setEditStartDate] = useState(initialDateStr);
    const [editEndDate, setEditEndDate] = useState(initialDateStr);
    const [editPercentComplete, setEditPercentComplete] = useState(0);

    const dispatch = useDispatch();

    const taskEdit = useSelector((state) => state.taskEdit);
    const { success: successEdit } = taskEdit;

    useEffect(() => {
        if (successEdit) {
            console.log('Edited task');

            // Close the modal
            hideEditModalHandler();

            // Reload page to update the change
            window.location.reload();

            // Reset task edit state
            dispatch({ type: TASK_EDIT_RESET });
        }
    }, [dispatch, hideEditModalHandler, successEdit]);

    const editTaskHandler = () => {
        const parseTaskId = parseInt(editTaskId.match(/(\d+)/g));

        dispatch(
            editTask({
                taskId: parseTaskId,
                taskName: editTaskName,
                resource: editResource,
                startDate: editStartDate,
                endDate: editEndDate,
                percentComplete: editPercentComplete,
                // No dependencies functionality yet as not needed
                // So will stay null
            })
        );
    };

    return (
        <Modal show={showEditModal} onHide={hideEditModalHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Edit task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="selectEditTaskId">
                        <Form.Label>
                            Select id for task that you want to change.
                        </Form.Label>
                        <Form.Control
                            as="select"
                            value={editTaskId}
                            onChange={(e) => setEditTaskId(e.target.value)}
                        >
                            {tasks &&
                                tasks.map((task) => (
                                    <option key={task.task_id}>
                                        Task Id {task.task_id}
                                    </option>
                                ))}
                        </Form.Control>
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
                            It will appear as index for task
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="editResource">
                        <Form.Label>Resources</Form.Label>
                        <Form.Control
                            type="textarea"
                            placeholder="Specify resource needed for task"
                            value={editResource}
                            onChange={(e) => setEditResource(e.target.value)}
                        />
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
                            <Button variant="primary" onClick={editTaskHandler}>
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
