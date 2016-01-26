import {
  UPDATE_SEARCHER,
  ADD_FILTER
} from '../actions'
import filterReducer from './filterReducer'
import dataGenerator from '../data-generator'

const defaultData = {
  searcher: '',
  filters: [],
  forms: dataGenerator(100)
}

const reducers = (state = defaultData, action) => {
  switch (action.type) {
    case UPDATE_SEARCHER:
      return Object.assign({}, state, {searcher: action.searcher})
    case ADD_FILTER:
      return filterReducer(state, action)
    default:
      return state
  }
}
export default reducers
