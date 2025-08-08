import React from "react";
import Logo from "./logo";
import { useZoom } from "../../contexts/ZoomContext";
import "./header.css";

export default function Header() {
    const { dayWidth, zoomIn, zoomOut, canZoomIn, canZoomOut } = useZoom();

    return (
        <header className="app-header">
            <div className="app-header-left">
                <Logo width={28} height={24} />
            </div>
            <div className="app-header-center">Tasks Tracker</div>
            <div className="app-header-right">
                <div className="zoom-controls">
                    <button
                        className="zoom-btn zoom-out"
                        onClick={zoomOut}
                        disabled={!canZoomOut}
                        title="Zoom out"
                    >
                        <span>−</span>
                    </button>
                    <span className="zoom-indicator">{dayWidth}%</span>
                    <button
                        className="zoom-btn zoom-in"
                        onClick={zoomIn}
                        disabled={!canZoomIn}
                        title="Zoom in"
                    >
                        <span>+</span>
                    </button>
                </div>
            </div>
        </header>
    );
}


