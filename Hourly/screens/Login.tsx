import React, { useState } from 'react';

import Custom from "../components/Custom";
import Container from "../components/Container";
import Title from '../components/Title';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <Title>hourly</Title>
            <Custom.Input
                placeholder="Enter your email"
                type="emailAddress"
                value={email}
                onChange={setEmail} />
            <Custom.Input
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={setPassword} />
            <Custom.Button>Login</Custom.Button>
        </Container>
    );
}

export default Login;