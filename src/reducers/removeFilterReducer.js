export default function removeFilterReducer (state, action) {
  const filter = action.filter
  return Object.assign({}, state, {
    filters: state.filters.filter((f) => f !== filter)
  })
}
