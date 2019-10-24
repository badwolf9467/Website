import React, {Component} from 'react'




class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            fullName: "",
            password: "",
            error: ""
        };

    }

    validateLogin (login, password) {
        return login === "kuba" && password === "test123";
    }
    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;

        this.setState({[name]: value});

    };




    handleSubmit= (event) => {
        event.preventDefault();
        let error = !this.validateLogin(this.state.fullName, this.state.password) ? "Invalid login or password!" : "";
        this.setState({"error": error});
    };



    render() {

        return(
            <div>
                <h3>{this.props.formLabel}</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='fullName'>
                        <div className='fieldName'>
                            <label htmlFor="fullName">Name</label>
                        </div>
                        <input type='text' name='fullName' noValidate onChange={this.handleChange} />
                    </div>
                    <div className='password'>
                        <div className='fieldName'>
                            <label htmlFor="password">Password</label>
                        </div>
                        <input type='password' name='password' noValidate onChange={this.handleChange}/>
                    </div>
                    <div>
                        {this.state.error &&
                        <span className='error'>{this.state.error}</span>}
                    </div>

                    <div className='submit'>
                        <button>Login</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default LoginForm;