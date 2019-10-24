import React, {Component} from 'react'
import Formwrapper from "./Formwrapper";
const validEmailRegex =
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
};

class RegisterForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            fullName: "",
            email: "",
            password: "",
            password1: "",
            gender: "",
            errors: {
                fullName: "",
                email: "",
                password: "",
                password1: "",
                gender: "",
            }
        };

    }
    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;


        switch (name) {
            case 'fullName':
                if(!this.fullNameFieldValidator(value)){
                    errors.fullName = "";
                }
                break;
            case 'email':
                if (this.emailFieldValidator(value)){
                    errors.email = "";
                }
                break;
            case 'password':
                if (!this.passwordFieldValidator(value)){
                    errors.password = "";
                }
                break;
            case 'gender':
                errors.gender =
                    value.gender === '0'
                        ? "Chose your gender!"
                        : "";
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value});

    };

    fullNameFieldValidator (str) {
        return str.length < 3;
    }

    passwordFieldValidator (str) {
        return str.length < 8;
    }

    emailFieldValidator (str) {
        return validEmailRegex.test(str);
    }
    password1FieldValidator (str) {
        return str === this.state.password;
    }

    genderFieldValidator (str) {
        return str === "0";
    }

    handleSubmit= (event) => {
        event.preventDefault();


        if(this.fullNameFieldValidator(this.state.fullName)){
            this.state.errors.fullName = "Name must be 3 characters long!";
        }
        else{
            this.state.errors.fullName = "";
        }

        if(this.passwordFieldValidator(this.state.password)){
            this.state.errors.password = "Password must be 8 characters long!";
        }
        else{
            this.state.errors.password = "";
        }

        if(!this.emailFieldValidator(this.state.email)){
            this.state.errors.email = "Invalid email!";
        }
        else {
            this.state.errors.email = "";
        }

        if(!this.password1FieldValidator(this.state.password1)){
            this.state.errors.password1 = "Passwords must match!";
        }
        else{
            this.state.errors.password1 = "";
        }
        /*if(this.genderFieldValidator(this.gender.state)){
            this.state.errors.gender = "Please chose your gender!";
        }*/


        if(validateForm(this.state.errors)){
            console.info("Valid form");
        }
        else{
            console.error("Invalid form");
        }

        this.setState({
            "errors": this.state.errors
        });
    };


    render() {

        const {errors} = this.state;

        return(
            <div>
                <h3>{this.props.formLabel}</h3>
                    <form onSubmit={this.handleSubmit} noValidate >
                        <div className='fullName'>
                            <div className='fieldName'>
                                <label htmlFor="fullName">Name</label>
                            </div>
                            <input type='text' name='fullName' onChange={this.handleChange} noValidate />
                            <div>
                                {errors.fullName &&
                                <span className='error'>{errors.fullName}</span>}
                            </div>
                        </div>
                        <div className='email'>
                            <div className='fieldName'>
                                <label htmlFor="email">Email</label>
                            </div>
                            <input type='text' name='email' onChange={this.handleChange} noValidate />
                            <div>
                                {errors.email &&
                                <span className='error'>{errors.email}</span>}
                            </div>
                        </div>
                        <div className='password'>
                            <div className='fieldName'>
                                <label htmlFor="password">Password</label>
                            </div>
                            <input type='password' name='password' onChange={this.handleChange} noValidate />
                            <div>
                                {errors.password &&
                                <span className='error'>{errors.password}</span>}
                            </div>
                        </div>
                        <div className='password'>
                            <div className='fieldName'>
                                <label htmlFor="password">Password</label>
                            </div>
                            <input type='password' name='password1' onChange={this.handleChange} noValidate />
                            <div>
                                {errors.password1 &&
                                <span className='error'>{errors.password1}</span>}
                            </div>
                        </div>
                        <div>
                            <select className='gender' name='gender' value={this.state.value} onChange={this.handleChange} noValidate>
                                <option dafaultvalue="0">What's your gender?</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                            {errors.gender &&
                            <span className='error'>{errors.gender}</span>}
                        </div>
                        <div className="check">
                            <label>
                            <input type="checkbox"/>
                            Are you zakolak?
                            </label>
                        </div>
                        <div className='submit'>
                            <button>Create</button>
                        </div>
                    </form>
            </div>
        );
    }
}

export default RegisterForm;