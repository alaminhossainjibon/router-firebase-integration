import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register: </h3>
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;