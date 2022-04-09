import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const { singInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div className='login'>
                <button onClick={singInWithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;