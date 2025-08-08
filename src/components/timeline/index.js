import React, { useMemo } from "react";
import timelineItems from "../../timelineItems";
import assignLanes from "../../assignLanes";
import TimelineContainer from "./components/TimelineContainer";
import TimelineHeader from "./components/TimelineHeader";
import TimelineLanes from "./components/TimelineLanes";
import "./timeline.css";

export default function Timeline() {
    const lanes = useMemo(() => {
        return assignLanes(timelineItems);
    }, []);

    const { startDate, endDate, timelineWidth } = useMemo(() => {
        const dates = timelineItems.map(item => [new Date(item.start), new Date(item.end)]).flat();
        const minDate = new Date(Math.min(...dates));
        const maxDate = new Date(Math.max(...dates));

        minDate.setDate(minDate.getDate() - 5);
        maxDate.setDate(maxDate.getDate() + 5);

        const totalDays = Math.ceil((maxDate - minDate) / (1000 * 60 * 60 * 24));
        const calculatedWidth = Math.max(1400, totalDays * 20);

        return {
            startDate: minDate.toISOString().split('T')[0],
            endDate: maxDate.toISOString().split('T')[0],
            timelineWidth: calculatedWidth
        };
    }, []);

    return (
        <TimelineContainer timelineWidth={timelineWidth}>
            <TimelineHeader
                startDate={startDate}
                endDate={endDate}
                timelineWidth={timelineWidth}
            />
            <TimelineLanes
                lanes={lanes}
                startDate={startDate}
                endDate={endDate}
                timelineWidth={timelineWidth}
            />
        </TimelineContainer>
    );
}