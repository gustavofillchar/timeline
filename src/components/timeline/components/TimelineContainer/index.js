import React from 'react';
import './TimelineContainer.css';

const TimelineContainer = ({ children, timelineWidth }) => {
    return (
        <div className="timeline-main-container">
            <div className="timeline-scroll-wrapper" style={{ minWidth: `${timelineWidth}px` }}>
                {children}
            </div>
        </div>
    );
};

export default TimelineContainer;
