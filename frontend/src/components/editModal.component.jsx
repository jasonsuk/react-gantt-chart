import React from 'react';
import { Modal, Form, Button, Col } from 'react-bootstrap';

const EditModal = ({ showEdit, hideEditModalHandler, saveEditTaskHandler }) => {
    return (
        <Modal show={showEdit} onHide={hideEditModalHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Edit task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="selectEditTaskId">
                        <Form.Label>
                            Select id for task that you want to change.
                        </Form.Label>
                        {/* <Form.Control
                            as="select"
                            value={changeId}
                            onChange={(e) => setChangeId(e.target.value)}
                        >
                            {[...Array(taskIds.length).keys()].map((x) => (
                                <option key={x + 1}>Task Id# {x + 1}</option>
                            ))}
                        </Form.Control> */}
                    </Form.Group>
                    <Form.Group controlId="editTaskName">
                        <Form.Label>Task name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter task name"
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
                        />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group controlId="editStartDate" as={Col} md={6}>
                            <Form.Label>Start date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter start date"
                            />
                        </Form.Group>
                        <Form.Group controlId="editEndDate" as={Col} md={6}>
                            <Form.Label>End date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter end date"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="editPrecentComplete">
                        <Form.Label>Percent completed</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter the progress in integer (0 to 100)"
                        />
                    </Form.Group>
                    <Form.Group controlId="editDependencies">
                        <Form.Label>Dependencies</Form.Label>
                        {/* {[...Array(taskIds.length).keys()].map((x) => (
                            <Form.Check
                                key={x + 1}
                                disabled
                                type="switch"
                                label={`Task Id# ${x + 1}`}
                                id={`dep${x + 1}`}
                            />
                        ))} */}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideEditModalHandler}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveEditTaskHandler}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditModal;
