const NUMBER_OF_ELEMENTS = 10
const LETTERS = 'abcdefghijklmnopqrstuvwxz'

const createFilledArray = (length) => {
  return Array.apply(null, Array(length)).map(Number.prototype.valueOf, 0)
}

const randomNum = (order) => Math.floor(Math.random() * order)

const randomWord = () => {
  const titleLength = randomNum(10) + 3
  const word = createFilledArray(titleLength).reduce((acc) => {
    const letter = LETTERS.charAt(randomNum(LETTERS.length))
    return acc + letter
  }, '')
  return word
}

const TAGS = createFilledArray(10).map(() => randomWord())
const PEOPLE = ['David', 'Linus', 'Carles', 'Maja', 'Victor', 'Bojana']

const randomArrayElements = (arr) => {
  const randomLength = randomNum(arr.length)
  return arr.sort(() => randomNum(3) - 1).filter((w, i) => i < randomLength)
}

const generateTitle = () => randomWord()
const generateTags = () => randomArrayElements(TAGS)
const generatePeople = () => randomArrayElements(PEOPLE)

const generateDate = () => {
  const now = Date.now()
  return new Date(now - randomNum(now))
}
const generateResults = () => randomNum(1000)

export default createFilledArray(NUMBER_OF_ELEMENTS)
  .map((a, index) => {
    return {
      id: index,
      title: generateTitle(),
      tags: generateTags(),
      people: generatePeople(),
      date: generateDate(),
      results: generateResults()
    }
  })
