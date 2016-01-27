import {
  UPDATE_SEARCHER,
  ADD_FILTER
} from '../actions'
import filterReducer from './filterReducer'
import searcherReducer from './searcherReducer'
import dataGenerator from '../data-generator'
const {forms, tags, people} = dataGenerator(100)

const defaultData = {
  searcher: '',
  suggestions: {},
  filters: [],
  forms,
  tags,
  people
}
console.log(defaultData)
const reducers = (state = defaultData, action) => {
  switch (action.type) {
    case UPDATE_SEARCHER:
      return searcherReducer(state, action)
    case ADD_FILTER:
      return filterReducer(state, action)
    default:
      return state
  }
}
export default reducers
