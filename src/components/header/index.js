import React from "react";
import Logo from "./logo";

export default function Header() {
    return (
        <header className="app-header">
            <div className="app-header-left">
                <Logo width={28} height={24} />
            </div>
            <div className="app-header-center">Tasks Tracker</div>
            <div className="app-header-right" />
        </header>
    );
}


