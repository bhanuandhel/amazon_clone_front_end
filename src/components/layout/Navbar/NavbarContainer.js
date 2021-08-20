import React, { Component } from 'react'
import NavbarView from './NavbarView'

class NavbarContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            prefLang: this.props.i18n.languages[0],
            selectedCat: 0,
            productCategory:[
                "navbar.product_category.all",
                "navbar.product_category.smartphone",
                "navbar.product_category.kitchen_hardware",
                "navbar.product_category.prime_deal",
                "navbar.product_category.book"
            ],
            query:""
        }
    }
    
    handleChangelang = (event) =>{
        this.setState({prefLang:event.target.value})
        this.props.i18n.changeLanguage(event.target.value);
    }

    handleCatChange = (e, index) =>{
        e.preventDefault();
        this.setState({selectedCat: index})
    }

    handleQueryChange = (event) =>{
            this.setState({query:[event.target.value]})
    }

    handleSearch = (event) =>{
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        
        const rtl = ( this.state.prefLang =='pk' ?'text-right':'');

        return (
            <NavbarView
                {...this.props}
                handleChangelang = {this.handleChangelang}
                prefLang = {this.state.prefLang}
                rtl={rtl}
                handleCatChange= {this.handleCatChange}
                selectedCat = {this.state.selectedCat}
                productCategory = {this.state.productCategory}
                handleQueryChange={this.handleQueryChange}
                query={this.state.query}
                handleSearch={this.handleSearch}
            />
        )
    }
}

export default NavbarContainer
