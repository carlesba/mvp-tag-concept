const isTagFilter = (filter) => {
  const identifier = filter.charAt(0)
  return identifier === '#'
}
const isPeopleFilter = (filter) => {
  const identifier = filter.charAt(0)
  return identifier === '@'
}
const findFilterOn = (list, term) => {
  const t = term.toLowerCase()
  return list.findIndex(person => person.toLowerCase() === t)
}
export const getColorFactory = (colors, people, tag) => filter => {
  if (isPeopleFilter(filter)) {
    const peopleIndex = findFilterOn(people, filter.substring(1))
    if (peopleIndex >= 0) {
      return colors[peopleIndex % colors.length]
    }
  }
  if (isTagFilter(filter)) {
    const tagIndex = findFilterOn(tag, filter.substring(1))
    if (tagIndex >= 0) {
      return colors[tagIndex % colors.length]
    }
  }
  return null
}
export const getColorFactoryBy = (colors, list) => filter => {
  const listIndex = findFilterOn(list, filter)
  if (listIndex >= 0) {
    return colors[listIndex % colors.length]
  }
  return null
}
