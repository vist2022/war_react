import React, {Component, useState} from 'react';
import LoginPage from "./components/LoginPage";
import GamePage from "./components/GamePage/GamePage";
import ResultPage from "./components/ResultPage";
import {Route, Routes, Switch} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const App = () => {

	return (
		<Switch>
			<Route path={['/', '/start']} exact component={LoginPage}/>
			<Route path={'/game'} exact component={GamePage}/>
			<Route path={'/result'} exact component={ResultPage}/>
			<Route component={ErrorPage}/>
		</Switch>
	)

}

export default App;