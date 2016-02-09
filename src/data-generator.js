import {TAGS, NAMES} from './typeformNames'
// const VOWELS = 'aeiou'
// const CONSONANT = 'bcdfghjklmnpqrstvwz'

const createFilledArray = (length) => {
  return Array.apply(null, Array(length)).map(Number.prototype.valueOf, 0)
}

const randomNum = (order) => Math.floor(Math.random() * order)

// const randomWord = () => {
//   const titleLength = randomNum(10) + 3
//   const word = createFilledArray(titleLength).reduce((acc, x, i) => {
//     const letter = i % 2
//       ? VOWELS.charAt(randomNum(VOWELS.length))
//       : CONSONANT.charAt(randomNum(CONSONANT.length))
//     return acc + letter
//   }, '')
//   return word
// }

// const TAGS = createFilledArray(10).map(() => randomWord())
const PEOPLE = ['David', 'Linus', 'Carles', 'Maja', 'Victor', 'Bojana']

const BG_COLORS = [ '#F1F9FA', '#FDF8EC', '#FAF1EA', '#F3F9EF', '#F9F3FA', '#FAEEF1' ]

const randomArrayElements = (arr) => {
  const randomLength = randomNum(arr.length)
  return arr.sort(() => randomNum(3) - 1).filter((w, i) => i < randomLength)
}

const getRandomElementFromArray = (arr) => {
  const randomIndex = randomNum(arr.length)
  return arr[randomIndex]
}

// const generateTitle = () => randomWord()
const generateTags = () => randomArrayElements(TAGS)
const generatePeople = () => randomArrayElements(PEOPLE)

const generateDate = () => {
  const now = Date.now()
  return new Date(now - randomNum(now))
}
const generateResults = () => randomNum(300)

const fakeDataGenerator = () => {
  return {
    forms: createFilledArray(NAMES.length)
      .map((a, index) => {
        return {
          id: index,
          title: NAMES[index],
          tags: generateTags(),
          people: generatePeople(),
          date: generateDate(),
          results: generateResults(),
          color: getRandomElementFromArray(BG_COLORS)
        }
      }),
    tags: TAGS,
    people: PEOPLE
  }
}

export default fakeDataGenerator
