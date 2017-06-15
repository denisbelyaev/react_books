import React, {Component} from 'react'
import {connect} from 'react-redux'
import {find as __find} from 'lodash';
import Book from '../components/Book';
class BookPage extends Component {
  render() {
    let {book} = this.props;

    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Ganres</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
            <Book book={book} />
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((state, props) => {
  const id = props.match.params.id;
  return {
    book: __find(state.books.collection, {'id': id}),
  }
}, null)(BookPage);
