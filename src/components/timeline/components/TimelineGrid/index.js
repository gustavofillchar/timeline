import React from 'react';
import './TimelineGrid.css';

const TimelineGrid = ({ startDate, endDate, timelineWidth }) => {
    const calculateDays = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

        const days = [];
        const current = new Date(start);

        for (let i = 0; i < totalDays; i++) {
            const isFirstOfMonth = current.getDate() === 1;

            days.push({
                date: new Date(current),
                isFirstOfMonth,
                dayOfMonth: current.getDate()
            });

            current.setDate(current.getDate() + 1);
        }

        return { days, totalDays };
    };

    const { days, totalDays } = calculateDays();
    const dayWidth = timelineWidth / totalDays;

    return (
        <div className="timeline-grid" style={{ width: `${timelineWidth}px` }}>
            {days.map((day, index) => (
                <div
                    key={index}
                    className={`timeline-grid-line ${day.isFirstOfMonth ? 'month-start' : ''}`}
                    style={{
                        left: `${index * dayWidth}px`,
                        width: `${dayWidth}px`
                    }}
                />
            ))}
        </div>
    );
};

export default TimelineGrid;
