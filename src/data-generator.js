const VOWELS = 'aeiou'
const CONSONANT = 'bcdfghjklmnpqrstvwz'

const createFilledArray = (length) => {
  return Array.apply(null, Array(length)).map(Number.prototype.valueOf, 0)
}

const randomNum = (order) => Math.floor(Math.random() * order)

const randomWord = () => {
  const titleLength = randomNum(10) + 3
  const word = createFilledArray(titleLength).reduce((acc, x, i) => {
    const letter = i % 2
      ? VOWELS.charAt(randomNum(VOWELS.length))
      : CONSONANT.charAt(randomNum(CONSONANT.length))
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
const generateResults = () => randomNum(300)

const fakeDataGenerator = (length) => {
  return createFilledArray(length)
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
}

export default fakeDataGenerator
