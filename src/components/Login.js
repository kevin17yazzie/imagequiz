import React from 'react'
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            authenticated : false
        };
    }


    onSubmit = (event) => {
        if (this.state.username.trim().length > 0){
            this.setState({authenticated: true});
        }
        event.preventDefault();
    }

    onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    render() {
        let from = {pathname: '/',
        state: {user: this.state.username}};

        if (this.state.authenticated) {
            return (
                <Redirect to={from} />
            );
        }
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <lable>Username:</lable>
                        <input
                        type = "text" 
                        name = "username"
                        value={this.state.username}
                        onChange = {this.onInputChange}>
                            
                        </input>
                        <br></br>
                        <lable>Password: </lable>
                        <input 
                        type = "text"
                        name = "password"
                        value={this.state.password}
                        onChange = {this.onInputChange}></input>
                        <br></br>
                        <button type="submit">Login</button>
                        
                    </form>
                </div>
            );
    }
}

export default Login;