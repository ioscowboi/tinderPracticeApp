import React, { Component } from 'react';
import BookList from '../containers/book-list';
// render BookDetail onto the page!
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        {/* this syntax is similar to a cfoutput or <% /%> in .RB files: */}
        <BookDetail />
      </div>
    );
  }
}
