import React, { Component } from 'react'
import NavbarView from './NavbarView'

class NavbarContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            prefLang: this.props.i18n.languages[0]
        }
    }
    
    handleChangelang = (event) =>{
        this.setState({prefLang:event.target.value})
        this.props.i18n.changeLanguage(event.target.value);
    }

    render() {
        
        const rtl = ( this.state.prefLang =='pk' ?'text-right':'');

        return (
            <NavbarView
                {...this.props}
                handleChangelang = {this.handleChangelang}
                prefLang = {this.state.prefLang}
                rtl={rtl}
            />
        )
    }
}

export default NavbarContainer
