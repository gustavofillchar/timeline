import React from 'react';
import TimelineItem from '../TimelineItem';
import TimelineGrid from '../TimelineGrid';
import './TimelineLanes.css';

const TimelineLanes = ({ lanes, startDate, endDate, timelineWidth }) => {
    const calculateTotalDays = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        return Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    };

    const totalDays = calculateTotalDays();

    return (
        <div className="timeline-lanes-container" style={{ minWidth: `${timelineWidth}px` }}>
            <TimelineGrid
                startDate={startDate}
                endDate={endDate}
                timelineWidth={timelineWidth}
            />
            {lanes.map((lane, laneIndex) => (
                <div key={laneIndex} className="timeline-lane">
                    <div className="timeline-lane-content">
                        {lane.map((item) => (
                            <TimelineItem
                                key={item.id}
                                item={item}
                                startDate={startDate}
                                endDate={endDate}
                                totalDays={totalDays}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TimelineLanes;
