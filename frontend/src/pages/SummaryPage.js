import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loader from '../components/Loader.component.jsx';
import Message from '../components/Message.component.jsx';

import {
    listTasks,
    createTask,
    deleteTask,
} from '../redux/actions/taskActions.js';
import { TASK_CREATE_RESET } from '../redux/constants/taskConstants.js';

const SummaryPage = ({ history }) => {
    const dispatch = useDispatch();

    const taskList = useSelector((state) => state.taskList);
    const { loading, error, tasks } = taskList;

    const taskCreate = useSelector((state) => state.taskCreate);
    const { success: successCreate, task: createdTask } = taskCreate;

    const taskDelete = useSelector((state) => state.taskDelete);
    const { success: successDelete } = taskDelete;

    useEffect(() => {
        dispatch({ type: TASK_CREATE_RESET });

        if (successCreate) {
            history.push(`/tasks/${createdTask[0].task_id}/edit`);
        } else {
            dispatch(listTasks());
        }
    }, [dispatch, history, successCreate, createdTask, successDelete]);

    const createTaskHandler = () => {
        dispatch(createTask());
    };

    const deleteTaskHandler = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteTask(id));
        }
    };

    const millisecondToDays = (milsec) => {
        const days = +milsec / 1000 / 60 / 60 / 24;
        return days;
    };

    const buttonStyle = {
        marginRight: '2px',
        marginTop: '2px',
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error.message}</Message>
            ) : (
                <Container className="text-center">
                    <Row className="align-items-center">
                        <Col className="my-4 text-left">
                            <h3>Task Summary</h3>
                        </Col>
                        <Col className="text-right">
                            <Button onClick={() => createTaskHandler()}>
                                Create task
                            </Button>
                        </Col>
                    </Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Task id</th>
                                <th>Task name</th>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Duration</th>
                                <th>Percent completed</th>
                                <th>sdf</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks &&
                                tasks.map((task) => (
                                    <tr key={task.task_id}>
                                        <td>{task.task_id}</td>
                                        <td>{task.task_name}</td>
                                        <td>
                                            {task.start_date.substring(0, 10)}
                                        </td>
                                        <td>
                                            {task.end_date.substring(0, 10)}
                                        </td>
                                        <td>
                                            {millisecondToDays(task.duration)}
                                            days
                                        </td>
                                        <td>{task.percent_complete} %</td>
                                        <th>
                                            <LinkContainer
                                                to={`/tasks/${task.task_id}/edit`}
                                                style={buttonStyle}
                                            >
                                                <Button>
                                                    <i className="fas fa-edit"></i>
                                                </Button>
                                            </LinkContainer>

                                            <Button
                                                style={buttonStyle}
                                                onClick={() =>
                                                    deleteTaskHandler(
                                                        task.task_id
                                                    )
                                                }
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </Button>
                                        </th>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Container>
            )}
        </>
    );
};

export default SummaryPage;
