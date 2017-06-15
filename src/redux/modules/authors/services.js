export const listAuthor = action => {
  let {payload} = action;
  let options = {
    ...payload,
    method: 'GET',
    url: '/authors'
  }

  return options;
}

export const getAuthor = action => {
  let {payload} = action;
  let options = {
    ...payload,
    method: 'POST',
    url: '/author',
    body: payload.user
  }

  return options;
}
