import React, { Component } from 'react'
import LoginView from './LoginView'

export class LoginContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email:"",
            password:""
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({...this.state, [e.target.name]:e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    render() {

        const rtl = ( this.state.prefLang =='pk' ?'text-right':'');

        return (
            <LoginView
            {...this.state}
            {...this.props}
            rtl={rtl}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            />
        )
    }
}

export default LoginContainer
