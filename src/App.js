import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';


import './App.css';

const App = () => {


	return (
		<BrowserRouter>
		<Routes>
			<Route path='/' element={
				<ProtectedRoute><ChatEngine
					height='100vh'
					userName={localStorage.getItem('username')}
					userSecret={localStorage.getItem('password')}
					projectID='eabb33a1-8ce6-4ff0-a486-716b2e20e18a'
					renderChatFeed = {(chatAppProps) => < ChatFeed {...chatAppProps}/>  }
				/></ProtectedRoute>}/>
			<Route path="/signup" element={<Signup/>}/>
			<Route path="/login" element={<LoginForm/>}/>
		</Routes>
		</BrowserRouter>
	);
} 
export default App;