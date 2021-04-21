import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Table, Button } from 'react-bootstrap';

import Loader from '../components/Loader.component.jsx';
import Message from '../components/Message.component.jsx';

import { listTasks } from '../redux/actions/taskActions.js';

const SummaryPage = () => {
    const dispatch = useDispatch();

    const taskList = useSelector((state) => state.taskList);
    const { loading, error, tasks } = taskList;

    useEffect(() => {
        dispatch(listTasks());
    }, [dispatch]);

    const editTaskHandler = () => {
        console.log('Editing task the other way');
    };

    const deleteTaskHandler = () => {
        console.log('Deleting task the other way');
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
                    <h3 className="my-4">Task Summary</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Task id</th>
                                <th>Task name</th>
                                <th>Start date</th>
                                <th>End date</th>
                                <th>Duration</th>
                                <th>Percent completed</th>
                                <th></th>
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
                                        <td>{task.duration} days</td>
                                        <td>{task.percent_complete} %</td>
                                        <th>
                                            <Button
                                                style={buttonStyle}
                                                onClick={() =>
                                                    editTaskHandler(
                                                        task.task_id
                                                    )
                                                }
                                            >
                                                <i className="fas fa-edit"></i>
                                            </Button>

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
