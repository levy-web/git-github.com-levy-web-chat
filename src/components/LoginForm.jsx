import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': "eabb33a1-8ce6-4ff0-a486-716b2e20e18a", 'User-Name': username, 'User-secret': password}

        try {
        //username / password=> chatengine-> give message

            await axios.get('https://api.chatengine.io/chats', {headers:authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            navigate('/')

        //works out -> logged in
  
        } catch (error) {
        // error--> try new username.
        setError('ooops!! incorrect credentials')
            
        }


    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Applicatiion</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value = {username} onChange = {(e) => setUsername(e.target.value) } className = "input" placeholder="Username" required />
                    <input type="password" value = {password} onChange = {(e) => setPassword(e.target.value) } className = "input" placeholder="Password" required />
                    <div align = "center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>

                        </button>

                    </div>
                    <p className='link-signup-p'> Dont have a username? <Link to='/signup' className="link-signup">create account</Link></p>
                    <h2 className="error">{error}</h2>

                </form>

            </div>

        </div>
    );
}
export default LoginForm;    