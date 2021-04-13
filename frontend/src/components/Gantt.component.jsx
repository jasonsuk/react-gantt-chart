import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Chart } from 'react-google-charts';

import { listRecords } from '../redux/actions/recordActions.js';

const Gantt = () => {
    const dispatch = useDispatch();

    const recordList = useSelector((state) => state.recordList);
    const { records } = recordList;

    // Extract relevant information
    const daysToMilliseconds = (days) => {
        return days * 24 * 60 * 60 * 1000;
    };

    const columnStructure = [
        { type: 'string', label: 'Task ID' },
        { type: 'string', label: 'Task Name' },
        { type: 'date', label: 'Start Date' },
        { type: 'date', label: 'End Date' },
        { type: 'number', label: 'Duration' },
        { type: 'number', label: 'Percent Complete' },
        { type: 'string', label: 'Dependencies' },
    ];

    const data = records.map((record) => {
        return [
            record.task_id,
            record.task_name,
            record.start_date ? new Date(record.start_date) : null,
            record.end_date ? new Date(record.end_date) : null,
            record.duration
                ? daysToMilliseconds(Number(record.duration))
                : null,
            record.percent_complete ? record.percent_complete : null,
            record.dependencies ? record.dependencies : null,
        ];
    });

    console.log(data);
    // Object.keys(data).map((key) => console.log(data[key]));

    useEffect(() => {
        dispatch(listRecords());
    }, [dispatch]);

    // Helper functions //

    // const weeksToMilliseconds = (weeks) => {
    //     return weeks * 7 * 24 * 60 * 60 * 1000;
    // };

    return (
        <Container className="my-4 p-4">
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="Gantt"
                loader={<div>Loading Chart</div>}
                data={[
                    columnStructure,
                    [
                        'Research',
                        'Find sources',
                        new Date(2015, 0, 1),
                        new Date(2015, 0, 5),
                        null,
                        100,
                        null,
                    ],
                    [
                        'Write',
                        'Write paper',
                        null,
                        new Date(2015, 0, 9),
                        daysToMilliseconds(3),
                        25,
                        'Research,Outline',
                    ],
                    [
                        'Cite',
                        'Create bibliography',
                        null,
                        new Date(2015, 0, 7),
                        daysToMilliseconds(1),
                        20,
                        'Research',
                    ],
                    [
                        'Complete',
                        'Hand in paper',
                        null,
                        new Date(2015, 0, 10),
                        daysToMilliseconds(1),
                        0,
                        'Cite,Write',
                    ],
                    [
                        'Outline',
                        'Outline paper',
                        null,
                        new Date(2015, 0, 6),
                        daysToMilliseconds(1),
                        100,
                        'Research',
                    ],
                ]}
                rootProps={{ 'data-testid': '1' }}
            />
        </Container>
    );
};

export default Gantt;
