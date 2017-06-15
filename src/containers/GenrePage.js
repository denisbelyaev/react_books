import React, {Component} from 'react'
import {connect} from 'react-redux'
import Book from '../components/Book'
import * as genreActions from '../redux/modules/genres/actions'
const {getGenre} = genreActions.sagaActions

class GenrePage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getGenre(id)
  }

  render() {
    let {genre} = this.props;

    return (
      <div>
        <h3>{genre.name}</h3>
        <table>
          <thead>
          <tr>
            <th>Book</th>
            <th>Authors</th>
          </tr>
          </thead>
          <tbody>
          {genre.books.map(book => (
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
    genre: state.genres.genre,
  }
}, (dispatch) => {
  return {
    getGenre: (id) => dispatch(getGenre.request(id))
  }
})(GenrePage);