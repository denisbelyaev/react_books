import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import BooksPage from './BooksPage';
import BookPage from './BookPage';
import AuthorsPage from './AuthorsPage';
import AuthorPage from './AuthorPage';
import GenrePage from './GenrePage';

class Content extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={BooksPage}/>
          <Route exact path='/book/:id' component={BookPage}/>
          <Route path='/authors' component={AuthorsPage}/>
          <Route exact path='/author/:id' component={AuthorPage}/>
          <Route exact path='/genre/:id' component={GenrePage}/>
        </Switch>
      </div>
    )

  }
}

export default Content;