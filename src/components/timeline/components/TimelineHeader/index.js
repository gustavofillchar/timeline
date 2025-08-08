import React from 'react';
import './TimelineHeader.css';

const TimelineHeader = ({ startDate, endDate, timelineWidth }) => {
    const generateMonths = () => {
        const months = [];
        const start = new Date(startDate);
        const end = new Date(endDate);

        start.setDate(1);

        end.setMonth(end.getMonth() + 1);
        end.setDate(0);

        const current = new Date(start);

        while (current <= end) {
            months.push({
                year: current.getFullYear(),
                month: current.getMonth(),
                name: current.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
            });
            current.setMonth(current.getMonth() + 1);
        }

        return months;
    };

    const generateDays = () => {
        const days = [];
        const start = new Date(startDate);
        const end = new Date(endDate);
        const current = new Date(start);

        while (current <= end) {
            days.push({
                date: new Date(current),
                dayOfMonth: current.getDate()
            });
            current.setDate(current.getDate() + 1);
        }

        return days;
    };

    const months = generateMonths();
    const days = generateDays();
    const dayWidth = timelineWidth / days.length;

    return (
        <div className="timeline-header">
            <div className="timeline-months" style={{ minWidth: `${timelineWidth}px` }}>
                {months.map((month, index) => (
                    <div key={index} className="timeline-month">
                        {month.name}
                    </div>
                ))}
            </div>
            <div className="timeline-days" style={{ minWidth: `${timelineWidth}px` }}>
                {days.map((day, index) => (
                    <div
                        key={index}
                        className="timeline-day"
                        style={{ width: `${dayWidth}px` }}
                    >
                        {day.dayOfMonth}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelineHeader;
