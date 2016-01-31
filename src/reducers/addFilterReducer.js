import formsFilterer from './formsFilterer'

export default function addFilterReducer (state, action) {
  const newFilters = [...state.filters, action.filter]
  return Object.assign({}, state, {
    searcher: '',
    suggestions: {tags: [], people: []},
    filters: newFilters,
    filteredForms: formsFilterer(state.forms, newFilters),
    suggestedTags: [],
    suggestedPeople: []
  })
}
