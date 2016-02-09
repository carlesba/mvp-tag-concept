import formsFilterer from './formsFilterer'

export default function addFilterReducer (state, action) {
  if (state.filters.indexOf(action.filter) >= 0) {
    console.log('no add filter')
    return state
  }
  const newFilters = [...state.filters, action.filter]
  return Object.assign({}, state, {
    searcher: '',
    filters: newFilters,
    filteredForms: formsFilterer(state.forms, newFilters),
    suggestedTags: [],
    suggestedPeople: []
  })
}
