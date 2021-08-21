import React, { Component } from 'react'
import LoginView from './LoginView'
import { loginRequest } from './../../redux/actions/loginActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
        const user = {
            email: this.state.email,
            password: this.state.password
          }
      
          this.props.loginRequest(user, this.props.history)
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

const mapStateToProps = (state) => ({
    login: state.login
  })
  
  const mapDispatchToProps = {
    loginRequest
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer))
