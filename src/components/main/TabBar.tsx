import React from 'react';
import './TabBar.css';

type TabBarProps = {
    tabs: Array<string>;
    selectedTabIndex: number;
    onClick: (tabIndex:number)=>void;
}

export default class TabBar extends React.Component<TabBarProps> {
    constructor(props: TabBarProps) {
        super(props)
        this.state = { selectedTabIndex: 0 }
    }
    render() {
        let tabs: Array<JSX.Element> = [];
        this.props.tabs.forEach((tabName, index) => {
            const classes = `tab-bar-entry ${this.props.selectedTabIndex === index ? 'tab-bar-entry-focused' : ''}`;
            tabs.push(
                <li key={tabName}
                    onClick={()=>{this.props.onClick(index)}}
                    className={classes}>{tabName}
                </li>
            )
        })

        return <ol id="tab-bar">
            {tabs}
        </ol>
    }
}