export default function formsFilterer (forms, filters = []) {
  return filters.reduce((filteredForms, condition) => {
    return filteredForms.filter(getFilter(condition))
  }, forms).map(idPicker)
}

const getFilter = (condition) => {
  const identifier = condition.charAt(0)
  if (identifier === '@') return getFiltererByField('people', condition.substring(1))
  if (identifier === '#') return getFiltererByField('tags', condition.substring(1))
  return (form) => condition.toLowerCase().indexOf(form.title.toLowerCase()) >= 0
}

const idPicker = (o) => o.id

const getFiltererByField = (field, condition) => (form) => {
  return !!form[field].find((item) => {
    return condition.toLowerCase().indexOf(item.toLowerCase()) >= 0
  })
}
