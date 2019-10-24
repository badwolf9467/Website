import React, {Component} from 'react';
import Formwrapper from "./Formwrapper";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
class Login extends Component{
    render() {
        return(
            <Formwrapper >
                <LoginForm formLabel={"Login"}/>
            </Formwrapper>
        )
    }
}

export default Login;
