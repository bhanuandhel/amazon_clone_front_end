import React, { Component } from 'react'
import HomePageProductView from './HomePageProductView';

class HomePageProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
           <HomePageProductView  {...this.props} />
        )
    }
}

export default HomePageProductContainer
