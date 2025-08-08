import React, { createContext, useContext, useState } from 'react';

const ZoomContext = createContext();

export const useZoom = () => {
    const context = useContext(ZoomContext);
    if (!context) {
        throw new Error('useZoom must be used within a ZoomProvider');
    }
    return context;
};

export const ZoomProvider = ({ children }) => {
    const [dayWidth, setDayWidth] = useState(40);

    const MIN_DAY_WIDTH = 10;
    const MAX_DAY_WIDTH = 100;
    const ZOOM_STEP = 10;

    const zoomIn = () => {
        setDayWidth(prev => Math.min(prev + ZOOM_STEP, MAX_DAY_WIDTH));
    };

    const zoomOut = () => {
        setDayWidth(prev => Math.max(prev - ZOOM_STEP, MIN_DAY_WIDTH));
    };

    const canZoomIn = dayWidth < MAX_DAY_WIDTH;
    const canZoomOut = dayWidth > MIN_DAY_WIDTH;

    const value = {
        dayWidth,
        zoomIn,
        zoomOut,
        canZoomIn,
        canZoomOut
    };

    return (
        <ZoomContext.Provider value={value}>
            {children}
        </ZoomContext.Provider>
    );
};
