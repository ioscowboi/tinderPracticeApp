// make BookDetail a component so that it is aware of state, and can affect state: 
import React, { Component } from 'react';
// connect application state to the props of BookDetail: 
import { connect } from 'react-redux';

export class BookDetail extends Component {
    render() {
        // return a default state of 'empty' if this.props.books is null:
        if (!this.props.book){
            return <div>Select a book to get started.</div>;
        }
        // otherwise go ahead and provide details:
        return(
            // return the container for the clicked book's details!!!
            <div>
                <h3>Details for:</h3>
                {/*book details are now avail through props since connect was used between react and redux: */}
                <div>{this.props.book.title}</div>
                <h3>Pages:</h3>
                <div>{this.props.book.pages}</div>
            </div>
        );
    }
}

// helper function: 
// state = application state
function mapStateToProps(state) {

    return {
        // props:
        book: state.activeBook
    };
}
// use connect(mapStateToProps) to pass react data through redux:
export default connect(mapStateToProps)(BookDetail);