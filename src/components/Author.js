import React from 'react';
import {Link} from 'react-router-dom'

const Author = ({author, biographyVisible = true}) =>
  <tr>
    <td>
      {`${author.firstName} ${author.lastName}`}
    </td>
    { biographyVisible
      ?
        <td>
          {author.biography}
        </td>
      :
        <td />
    }
    <td>
      {author.books.map(book => (
        <Link key={book.id} to={`/book/${book.id}`}>{book.title}</Link>
      )).map((item, index) => [index > 0 && ', ', item])}
    </td>
  </tr>

export default Author;