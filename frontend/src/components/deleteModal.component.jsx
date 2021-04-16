import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const DeleteModal = ({
    showDelete,
    hideDeleteModalHandler,
    saveDeleteTaskHandler,
    tasks,
}) => {
    const [deleteTaskId, setDeleteTaskId] = useState('Selete task to delete');

    return (
        <Modal show={showDelete} onHide={hideDeleteModalHandler}>
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
                            onChange={(e) =>
                                setDeleteTaskId(
                                    parseInt(e.target.value.match(/(\d+)/g))
                                )
                            }
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
                <Button variant="primary" onClick={saveDeleteTaskHandler}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;
