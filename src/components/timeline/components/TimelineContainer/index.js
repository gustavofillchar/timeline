import React, { useEffect, useRef } from 'react';
import './TimelineContainer.css';

const TimelineContainer = ({ children, timelineWidth }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollLeft = 0;
        }
    }, []);

    return (
        <div className="timeline-main-container" ref={containerRef}>
            <div className="timeline-scroll-wrapper" style={{ minWidth: `${timelineWidth}px` }}>
                {children}
            </div>
        </div>
    );
};

export default TimelineContainer;
