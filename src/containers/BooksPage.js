import React, {Component} from 'react'
import {connect} from 'react-redux'
import Book from '../components/Book'
import * as bookActions from '../redux/modules/books/actions'
const {listBook} = bookActions.sagaActions
import * as authorActions from '../redux/modules/authors/actions'
const {listAuthor} = authorActions.sagaActions

class BooksPage extends Component {
  componentDidMount() {
    this.props.listBook();
    this.props.listAuthor();
  }

  render() {
    let {books} = this.props;
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Book</th>
            <th>Authors</th>
          </tr>
          </thead>
          <tbody>
          {books.map(book => (
            <Book key={`${book.id}_${book.title}`} book={book} genresVisible={false} descVisible={false}/>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    books: state.books.collection,
  }
}, (dispatch) => {
  return {
    listBook: () => dispatch(listBook.request()),
    listAuthor: () => dispatch(listAuthor.request())
  }
})(BooksPage);