// render a list of books:

import React, { Component } from 'react';
// how to connect react-redux to the application using a function:
import { connect } from 'react-redux';

export class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item">{book.title}</li>
            );
        });
    }
    render (){
        return (
            <ul className="list-grounp col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Return state (glue between react and redux )
function mapStateToProps(state) {
    //  whatever is returned will show up as props 
        // inside of booklist
        return {
            books: state.books
        }
}

export default connect(mapStateToProps)(BookList);