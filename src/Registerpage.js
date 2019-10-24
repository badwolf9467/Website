import React, {Component} from 'react';
import Formwrapper from "./Formwrapper";
import RegisterForm from "./RegisterForm";
class Registerpage extends Component{
    render() {
        return(
            <Formwrapper >
                <RegisterForm formLabel={"Register"}/>
            </Formwrapper>
        )
    }
}

export default Registerpage;
