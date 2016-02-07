import formsFilterer from './formsFilterer'

export default function searcherReducer (state, action) {
  const {searcher} = action
  const filters = [...state.filters, searcher]
  const filteredForms = formsFilterer(state.forms, filters)
  return Object.assign({}, state, {
    searcher,
    filteredForms
  }, findSuggestions(searcher, state))
}

const findSuggestions = (text, {tags, people}) => {
  if (text.length === 0) return {suggestedTags: [], suggestedPeople: []}
  if (text.charAt(0) === '#') {
    return { suggestedTags: findIn(text.substring(1), tags), suggestedPeople: [] }
  }
  if (text.charAt(0) === '@') {
    return { suggestedTags: [], suggestedPeople: findIn(text.substring(1), people) }
  }
  return {
    suggestedPeople: findIn(text, people),
    suggestedTags: findIn(text, tags)
  }
}

const findIn = (text, list) => {
  const t = text.toLowerCase()
  return list.filter((el) => el.toLowerCase().indexOf(t) >= 0)
}
