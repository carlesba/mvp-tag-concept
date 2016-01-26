export const UPDATE_SEARCHER = 'UPDATE_SEARCHER'

export function updateSearcher (value) {
  return {
    type: UPDATE_SEARCHER,
    searcher: value
  }
}

export const ADD_FILTER = 'ADD_FILTER'

export function addFilter () {
  return {
    type: ADD_FILTER
  }
}
