import formsFilterer from './formsFilterer'

export default function removeFilterReducer (state, action) {
  const filter = action.filter
  const newFilters = state.filters.filter((f) => f !== filter)
  return Object.assign({}, state, {
    filters: newFilters,
    filteredForms: formsFilterer(state.forms, newFilters)
  })
}
