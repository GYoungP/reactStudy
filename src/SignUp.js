import React, { useState } from 'react';

const SignUp = () => {
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        const loginObj = {};
        loginObj.userId = userId;
        loginObj.password = password;
        const obj = {userId: userId, password:password};
        console.log(obj)
    }
    return (
        <div>
            <input type="text" onChange={(e) => setUserId.apply(e.target.value)}/>
            <input type="Password" onChange={setPassword}/>
            <button onClick={() => login()}>로그인</button>
        </div>
    );
};

export default SignUp;