// render a list of books:

import React, { Component } from 'react';
// how to connect react-redux to the application using a function:
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// allows actions to flow through redux and reducers
import { bindActionCreators } from 'redux'; 

export class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    //  the onclick allows us to call
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
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
//  if the state ever changes, 'mapStateToProps will auto re-render:
function mapStateToProps(state) {
    //  whatever is returned will show up as props 
        // inside of booklist
        return {
            books: state.books
        }
}
// anything returned from this function will end up as props on Booklist container:
function mapDispatchToProps(dispatch) {
    //  when selectbook is called, the result should be passed to all reducers:
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}
// Promote booklist from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop:
export default connect(mapStateToProps, mapDispatchToProps)(BookList);