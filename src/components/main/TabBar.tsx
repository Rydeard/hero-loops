import React from 'react';
import './TabBar.css';

type TabBarProps = {
    tabs: Array<string>;
}

type TabBarState = {
    selectedTabIndex: number;
}

export default class TabBar extends React.Component<TabBarProps, TabBarState> {
    constructor(props: TabBarProps) {
        super(props)
        this.state = { selectedTabIndex: 0 }
    }
    render() {
        let tabs: Array<JSX.Element> = [];
        this.props.tabs.forEach((tabName, index) => {
            const classes = `tab-bar-entry ${this.state.selectedTabIndex === index ? 'tab-bar-entry-focused' : ''}`;
            tabs.push(
                <li key={tabName}
                    onClick={() => { this.setState({ selectedTabIndex: index }) }}
                    className={classes}>{tabName}
                </li>
            )
        })

        return <ol id="tab-bar">
            {tabs}
        </ol>
    }
}