import React from 'react';
import {Link} from 'react-router-dom'

const Book = ({book, genresVisible=true, descVisible=true}) =>
  <tr>
    <td>
      {book.title}
    </td>
    <td>
      {book.authors.map(author => (
        <Link key={author.id} to={`/author/${author.id}`}>{`${author.firstName}`}</Link>
      )).map((item, index) => [index > 0 && ', ', item])}
    </td>
    {
      genresVisible
      ?
        <td>
          {book.genres.map(ganre => (
            <Link key={ganre.id} to={`/genre/${ganre.id}`}>{`${ganre.name}`}</Link>
          )).map((item, index) => [index > 0 && ', ', item])}
        </td>
      :
        <td/>
    }
    {
      descVisible
      ?
        <td>
          {book.description}
        </td>
      :
        <td/>

    }
  </tr>

export default Book;