import React, {Component} from 'react'
import {connect} from 'react-redux'
import {find as __find} from 'lodash'
import Author from '../components/Author'

class AuthorPage extends Component {
  render() {
    let {author} = this.props;

    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Author</th>
            <th>Biography</th>
            <th>Books</th>
          </tr>
          </thead>
          <tbody>
            <Author author={author} />
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((state, props) => {
  const id = props.match.params.id;
  return {
    author: __find(state.authors.collection, {'id': id}),
  }
}, null)(AuthorPage);