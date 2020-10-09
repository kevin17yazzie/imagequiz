import React from 'react'
import Login from './Login';
import './Home.css'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            showLoginForm: false,
            authenticated : false
        };
    }

    login = () => {
        this.setState({
            showLoginForm : true
        });
    }

    onSubmit = (event) => {
        if (this.state.username.trim().length > 0){
            this.setState({authenticated: true});
        }
        event.preventDefault();
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    body = () => {
        return (
            <div>
                Hello from Home page!
            </div>
        );
    }

    render() {

        if (this.state.showLoginForm){
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <lable>Username:</lable>
                        <input 
                        type = "text" 
                        name = "username"
                        value={this.state.username}
                        onChange = {this.handleChange}></input>
                        <br></br>
                        <lable>Password: </lable>
                        <input 
                        type = "text"
                        name = "password"
                        value={this.state.password}
                        onChange = {this.handleChange}></input>
                        <br></br>
                        <button type="submit">Login</button>
                        
                    </form>
                </div>
            );
        }

        return (
            <div>
                <div className = "loginButton"> 
                    {this.state.authenticated ? this.state.username :
                    <button onClick = {this.login()}>Login</button>}
                    

                </div>

                {this.body()}
            </div>
        );
    }
}

export default Home;