import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ item, startDate, endDate, totalDays }) => {
    const calculatePosition = () => {
        const itemStart = new Date(item.start);
        const itemEnd = new Date(item.end);
        const timelineStart = new Date(startDate);
        const timelineEnd = new Date(endDate);

        const daysFromStart = Math.floor((itemStart - timelineStart) / (1000 * 60 * 60 * 24));
        const leftPercent = (daysFromStart / totalDays) * 100;

        const itemDuration = Math.floor((itemEnd - itemStart) / (1000 * 60 * 60 * 24)) + 1;
        const widthPercent = (itemDuration / totalDays) * 100;

        return {
            left: `${leftPercent}%`,
            width: `${widthPercent}%`
        };
    };

    const position = calculatePosition();

    return (
        <div
            className="timeline-item"
            style={{
                left: position.left,
                width: position.width
            }}
            title={`${item.name}\n${item.start} - ${item.end}`}
        >
            <span className="timeline-item-text">{item.name}</span>
        </div>
    );
};

export default TimelineItem;
