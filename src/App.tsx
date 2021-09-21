import './App.css';
import TabBar from './components/main/TabBar';
import 'typeface-inter';
// import GameTickTest from './components/main/GameTickTest';
import React from 'react';
import LayoutContainer from './components/containers/LayoutContainer';
import LoopOverview from './components/tabs/home/LoopOverview';
import LoopPlanner from './components/tabs/loop/LoopPlanner';
import Combat from './components/tabs/home/Combat';
import Actions from './components/tabs/loop/Actions';
import Attributes from './components/tabs/character/Attributes';
import Items from './components/tabs/character/Items';
import CombatStrategy from './components/tabs/skills/CombatStrategy';
import Skills from './components/tabs/skills/Skills';
import DayControls from './components/main/DayControls';
import Settings from './components/main/Settings';

type AppProps = {
}

type AppState = {
  gameTick: number
  prevGameTick: number
  deltaTime: number
  intervalRef?: NodeJS.Timeout
  selectedTabIndex: number,
}

type GameData = {

}

type TabData = {
  leftContainerContent: React.ReactElement,
  rightContainerContent: React.ReactElement
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      gameTick: 0,
      prevGameTick: 0,
      deltaTime: 0,
      selectedTabIndex: 0
    }

    // this.handleTabChange.bind(this)
  }

  render() {
    //        <GameTickTest gameTick={this.state.gameTick}></GameTickTest>
    const tabs: Array<TabData> = [
      //home
      {
        leftContainerContent: <LoopOverview></LoopOverview>,
        rightContainerContent: <Combat></Combat>
      },
      //loop
      {
        leftContainerContent: <LoopPlanner></LoopPlanner>,
        rightContainerContent: <Actions></Actions>
      },
      //character
      {
        leftContainerContent: <Attributes></Attributes>,
        rightContainerContent: <Items></Items>
      },
      //skills
      {
        leftContainerContent: <CombatStrategy></CombatStrategy>,
        rightContainerContent: <Skills></Skills>
      },
    ]

    let selectedTab: TabData = tabs[this.state.selectedTabIndex]
    return (

      <div>
        <div id="top-bar-container"><TabBar tabs={["Home", "Loop", "Character", "Skills"]} onClick={this.handleTabChange} selectedTabIndex={this.state.selectedTabIndex}></TabBar>
          <div id="top-bar-right-container"><Settings></Settings>
            <DayControls></DayControls></div></div>
        <LayoutContainer {...selectedTab} ></LayoutContainer>
      </div>

    );
  }

  handleTabChange = (tabIndex: number): void => {
    this.setState({ selectedTabIndex: tabIndex });
  }

  tick() {
    this.setState(state => ({
      prevGameTick: state.gameTick,
      gameTick: Date.now(),
      deltaTime: state.gameTick - state.prevGameTick
    }));
  }

  componentDidMount() {
    this.tick()
    let interval = setInterval(() => { this.tick() }, 1000);
    this.setState({ intervalRef: interval });
  }
}