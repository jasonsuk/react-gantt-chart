import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Chart from 'react-google-charts';

import { Container } from 'react-bootstrap';

// import { listTasks } from '../redux/actions/taskActions.js';

// const sampleData = [
//     [
//         { type: 'string', label: 'Task ID' },
//         { type: 'string', label: 'Task Name' },
//         { type: 'string', label: 'Resource' },
//         { type: 'date', label: 'Start Date' },
//         { type: 'date', label: 'End Date' },
//         { type: 'number', label: 'Duration' },
//         { type: 'number', label: 'Percent Complete' },
//         { type: 'string', label: 'Dependencies' },
//     ],
//     ['toTrain', 'Walk to train stop', 'strain', null, null, 2, 100, null],
//     ['music', 'Listen to music', 'songs', null, null, 2, 100, null],
//     ['wait', 'Wait for train', 'train', null, null, 2, 0, 'toTrain'],
// ];

// Helper function
const getData = (tasks) => {
    const data = [];
    const columns = [
        { type: 'string', label: 'Task ID' },
        { type: 'string', label: 'Task Name' },
        { type: 'string', label: 'Resource' },
        { type: 'date', label: 'Start Date' },
        { type: 'date', label: 'End Date' },
        { type: 'number', label: 'Duration' },
        { type: 'number', label: 'Percent Complete' },
        { type: 'string', label: 'Dependencies' },
    ];

    tasks.map((task) => {
        return data.push([
            task.task_id,
            task.task_name,
            task.resource,
            new Date(task.start_date),
            new Date(task.end_date),
            task.duration,
            task.percent_complete,
            task.dependencies,
        ]);
    });
    data.splice(0, 0, columns);
    return data;
};

// Constructing Gantt component
const Gantt = ({ tasks }) => {
    //     const dispatch = useDispatch();
    //
    //     const taskList = useSelector((state) => state.taskList);
    //     const { tasks } = taskList;
    //
    //     // console.log(data);
    //
    //     useEffect(() => {
    //         if (tasks) {
    //             console.log('Tasks loaded');
    //         } else {
    //             dispatch(listTasks());
    //         }
    //     }, [dispatch, tasks]);

    return (
        <Container style={{ display: 'flex' }} className="my-4">
            <Chart
                width={'100%'}
                height={'800px'}
                chartType="Gantt"
                loader={<div>Loading Chart</div>}
                data={tasks ? getData(tasks) : []}
                rootProps={{ 'data-testid': '1' }}
                // explorer={{ actions: ['dragToZoom', 'rightClickToReset'] }}
            />
        </Container>
    );
};

export default Gantt;
