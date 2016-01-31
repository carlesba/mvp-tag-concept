export const UPDATE_SEARCHER = 'UPDATE_SEARCHER'

export function updateSearcher (value) {
  return {
    type: UPDATE_SEARCHER,
    searcher: value
  }
}

export const ADD_FILTER = 'ADD_FILTER'

export function addFilter (filter) {
  return { type: ADD_FILTER, filter }
}

export const REMOVE_FILTER = 'REMOVE_FILTER'

export function removeFilter (filter) {
  return { type: REMOVE_FILTER, filter }
}
