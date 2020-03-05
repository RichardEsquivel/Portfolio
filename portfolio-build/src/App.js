import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header.js";


function App() {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' component={Header} />
			</Router>
		</div>
	)
}

export default App;
