import React from 'react';
import './DayControls.css';

type DayControlsProps = {
}

export default class DayControls extends React.Component<DayControlsProps> {
    render() {
        return <div id="day-controls"><h2>Day 1</h2><p>1:30pm</p></div>
    }
}