// make BookDetail a component so that it is aware of state, and can affect state: 
import React, { Component } from 'react';

export default class BookDetail extends Component {
    render() {
        return(
            // return the container for the clicked book's details!!!
            <div>Book Detail!</div>
        )
    }
}