import React from 'react';
import './LayoutContainer.css';

type LayoutContainerProps = {
    leftContainerContent: React.ReactElement;
    rightContainerContent: React.ReactElement;
}

type LayoutContainerState = {
}

export default class LayoutContainer extends React.Component<LayoutContainerProps, LayoutContainerState> {
    render() {
        return <div id="container-wrapper">
            <div id="left-container">
                {this.props.leftContainerContent}
            </div>

            <div id="right-container">
                {this.props.rightContainerContent}
            </div>
        </div>
    }
}