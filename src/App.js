import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';


import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />


	return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='7103f433-343f-400b-a01e-bbe3e5cff450'
            renderChatFeed = {(chatAppProps) => < ChatFeed {...chatAppProps}/>  }
		/>
	);
} 
export default App;