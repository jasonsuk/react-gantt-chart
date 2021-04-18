import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Button } from 'react-bootstrap';

import { deleteTask } from '../redux/actions/taskActions.js';

import { TASK_DELETE_RESET } from '../redux/constants/taskConstants.js';

const DeleteModal = ({ showDeleteModal, hideDeleteModalHandler, tasks }) => {
    const [deleteTaskId, setDeleteTaskId] = useState();

    const dispatch = useDispatch();

    const taskDelete = useSelector((state) => state.taskDelete);
    const { success: successDelete } = taskDelete;

    useEffect(() => {
        if (successDelete) {
            console.log('Deleted task');
            // Reset task delete state
            dispatch({ type: TASK_DELETE_RESET });

            // Close the modal
            hideDeleteModalHandler();

            // Reload page to update the change
            window.location.reload();
        }
    }, [dispatch, successDelete, hideDeleteModalHandler]);

    const deleteTaskHandler = (taskId) => {
        // Parsing integer i.e. Task Id 1 -> 1
        const parseTaskId = parseInt(taskId.match(/(\d+)/g));

        if (
            window.confirm(
                `Are you sure? You are permanently deleting ${taskId}.`
            )
        ) {
            dispatch(deleteTask(parseTaskId));
        }
    };

    return (
        <Modal show={showDeleteModal} onHide={hideDeleteModalHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Edit task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="selectTaskId">
                        <Form.Label>
                            Select id of task that you want to delete
                        </Form.Label>

                        <Form.Control
                            as="select"
                            value={deleteTaskId}
                            onChange={(e) => setDeleteTaskId(e.target.value)}
                        >
                            {tasks &&
                                tasks.map((task) => (
                                    <option key={task.task_id}>
                                        Task Id {task.task_id}
                                    </option>
                                ))}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideDeleteModalHandler}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => deleteTaskHandler(deleteTaskId)}
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;
