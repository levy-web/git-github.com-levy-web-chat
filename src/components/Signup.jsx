import React, { useState } from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate  = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Private-Key': "0507a78c-305e-4d04-bd23-e19921c0a0e3"}
        const formData = {"username":username, "secret":password}

        try {
        //username / password=> chatengine-> give message

            await axios.post(
                'https://api.chatengine.io/users',
                formData, 
                {headers:authObject} )
                // .then(r=>{
                //     if(r.status === 201){
                //         navigate('/login')
                //     }})
                navigate('/login')

            // window.location.reload();

        //works out -> logged in
  
        } catch (error) {
        // error--> try new username.
        setError('ooops!! invalid username')
            
        }


    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Applicatiion</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value = {username} onChange = {(e) => setUsername(e.target.value) } className = "input" placeholder="Username" required />
                    <input type="password" value = {password} onChange = {(e) => setPassword(e.target.value) } className = "input" placeholder="Password" required />
                    {/* <input type="password" value = {password} onChange = {(e) => setPassword(e.target.value) } className = "input" placeholder="Confirm Password" required /> */}
                    <div align = "center">
                        <button type="submit" className="button">
                            <span>Create Account</span>
                        </button>

                    </div>
                    <p className='link-signup-p'> Have a username? <Link to='/login' className="link-signup">Login</Link></p>
                    <h2 className="error">{error}</h2>

                </form>

            </div>

        </div>
    );
}
export default Signup;