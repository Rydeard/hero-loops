import React from 'react';
import Icons from '../../utils/Icons';
import './Settings.css'

type SettingsProps = {
}

export default class Settings extends React.Component<SettingsProps> {
    render() {
        return <div id="settings">{Icons.settings}</div>
    }
}