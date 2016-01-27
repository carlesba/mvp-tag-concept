export default function filterReducer (state, action) {
  return Object.assign({}, state, {
    searcher: '',
    suggestions: {tags: [], people: []},
    filters: [state.searcher, ...state.filters]
  })
}
