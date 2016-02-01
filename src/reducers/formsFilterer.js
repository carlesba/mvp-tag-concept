export default function formsFilterer (forms, filters = []) {
  return filters.reduce((filteredForms, condition) =>
    filteredForms.filter(builFilterByCondition(condition))
    , forms
  ).map(idPicker)
}

const builFilterByCondition = (condition) => {
  const identifier = condition.charAt(0)
  if (identifier === '@') return getFiltererByField('people', condition.substring(1))
  if (identifier === '#') return getFiltererByField('tags', condition.substring(1))
  return (form) => itMatches(condition, form.title)
}

const idPicker = (o) => o.id

const getFiltererByField = (field, condition) => (form) =>
  form[field].find(fieldItem => itMatches(condition, fieldItem)) !== undefined

const itMatches = (condition, term) =>
  new RegExp(condition.toLowerCase()).test(term.toLowerCase())
