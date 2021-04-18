import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Button } from 'react-bootstrap';

import { deleteTask } from '../redux/actions/taskActions.js';

const DeleteModal = ({
    showDeleteModal,
    hideDeleteModalHandler,
    tasks,
    history,
}) => {
    const [deleteTaskId, setDeleteTaskId] = useState();

    const dispatch = useDispatch();

    const taskDelete = useSelector((state) => state.taskDelete);
    const { success: successDelete } = taskDelete;

    useEffect(() => {
        if (successDelete) {
            console.log('Deleted task');
            hideDeleteModalHandler();

            // Reload page to update the change
            window.location.reload();
        }
    }, [dispatch, successDelete, hideDeleteModalHandler]);

    const deleteTaskHandler = (taskId) => {
        // Parsing integer i.e. Task Id 1 -> 1
        const parseTaskId = parseInt(taskId.match(/(\d+)/g));
        console.log(`Deleting Task Id ${parseTaskId}`);
        console.log(parseTaskId);
        dispatch(deleteTask(parseTaskId));
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
