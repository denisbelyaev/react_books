export const listGenre = action => {
  let {payload} = action;
  let options = {
    ...payload,
    method: 'GET',
    url: '/genres'
  }

  return options;
}

export const getGenre = action => {
  let {payload} = action;
  let options = {
    ...payload,
    method: 'GET',
    url: '/genre',
  }

  return options;
}
