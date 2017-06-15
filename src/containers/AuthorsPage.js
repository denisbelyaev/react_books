import React, {Component} from 'react'
import {connect} from 'react-redux'
import Author from '../components/Author'

class AuthorsPage extends Component {
  render() {
    let {authors} = this.props;
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Author</th>
            <th>Books</th>
          </tr>
          </thead>
          <tbody>
          {authors.map(author => (
            <Author key={`${author.id}_${author.lastName}`} author={author} biographyVisible={false}/>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    authors: state.authors.collection,
  }
})(AuthorsPage);