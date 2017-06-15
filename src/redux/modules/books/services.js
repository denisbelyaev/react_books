export const listBook = action => {
  let {payload} = action;
  let options = {
    ...payload,
    method: 'GET',
    url: '/books'
  }

  return options;
}

export const getBook = action => {
  let {payload} = action;
  let options = {
    ...payload,
    method: 'POST',
    url: '/book',
    body: payload.book
  }

  return options;
}
