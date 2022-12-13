import React from 'react';
import { useState } from 'react';

const SignIn = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        const Obj = { userId: userId, password: password };
        console.log(Obj);
    };

    return (
        <div className="signIn">
            <div className="container">
                <h2>Sign in</h2>
                <input
                    type="text"
                    onChange={(e) => {
                        setUserId(e.target.value);
                    }}
                    placeholder="아이디를 입력해주세요."
                    value={userId}
                />
                <input
                    type="password"
                    onChange={(e) => {
                        console.log(e.target.value);
                        setPassword(e.target.value);
                    }}
                    placeholder="비밀번호를 입력해주세요."
                    value={password}
                />
                <button onClick={login}>로그인</button>
            </div>
        </div>
    );
};

export default SignIn;
