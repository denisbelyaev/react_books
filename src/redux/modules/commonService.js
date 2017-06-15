import 'isomorphic-fetch';
import {find as __find} from 'lodash'
import data from './books.json';

const callApi = (options) => {
  var response;
  var {url, id} = options;

  switch (url) {
    case '/books':
      response = {
        success: true,
        result: data.books
      };
      break;
    case '/authors':
      response = {
        success: true,
        result: data.authors
      };
      break;
    case '/genre':
      response = {
        success: true,
        result: __find(data.genres, {'id': id})
      };
      break;
    default:
      response = {};
  }
  return Promise.resolve(response)
    .then(response => {
      return response;
    })
};

export default callApi;
