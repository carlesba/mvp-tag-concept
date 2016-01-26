export default function filterReducer (state, action) {
  return Object.assign({}, state, {
    searcher: '',
    filters: [state.searcher, ...state.filters]
  })
}
