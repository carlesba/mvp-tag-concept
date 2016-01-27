export default function searcherReducer (state, action) {
  const {searcher} = action
  return Object.assign({}, state, {
    searcher: searcher,
    suggestions: findSuggestions(searcher, state)
  })
}

const findSuggestions = (text, {people, tags}) => {
  if (text.length === 0) return {}
  if (text.charAt(0) === '#') {
    return { tags: findIn(text.substring(1), tags) }
  }
  if (text.charAt(0) === '@') {
    return { people: findIn(text.substring(1), people) }
  }
  return {
    people: findIn(text, people),
    tags: findIn(text, tags)
  }
}

const findIn = (text, list) => {
  const t = text.toLowerCase()
  return list.filter((el) => el.toLowerCase().indexOf(t) >= 0)
}
