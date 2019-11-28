import React, { Component } from 'react';
import ScrollableTabsButtonForce from './components/Navigation/Navigation';
import ProjectCardList from './components/ProjectCardList/ProjectCardList';
import Experience from './components/Experience/Experience';
import Skill from './components/Skill/Skill';
import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<ScrollableTabsButtonForce />
				<ProjectCardList />
				<Experience />
				<Skill />
			</React.Fragment>
		);
	}
}

export default App;
