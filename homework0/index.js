const people = [
  { name: "Person1", sex: "M", favouriteMovie: "Movie1" },
  { name: "Person2", sex: "F", favouriteMovie: "Movie2" },
  { name: "Person3", sex: "M", favouriteMovie: "Movie3" },
  { name: "Person4", sex: "F", favouriteMovie: "Movie4" },
]


const plus = (...args) =>
  args.reduce((sum, current) =>
    sum + current,
    0,
  )


const multiply = (argOne, argTwo) => argOne * argTwo


const multiplyAll = (...args) =>
  args.reduce((mul, current) =>
    mul * current,
    1,
  )


const mergeArrays = (arrayOne, arrayTwo) => arrayOne.concat(arrayTwo)


const filterFemales = people =>
  people.filter(people => people.sex == "F")


const getQuadrant = (x, y) => {
  if (x > 0 && y > 0) {
    return "First quarter"
  }
  if (x < 0 && y > 0) {
    return "Second quarter"
  }
  if (x < 0 && y < 0) {
    return "Third quarter"
  }
  if (x > 0 && y < 0) {
    return "Fourth quarter"
  }
  if (x === 0 && y === 0) {
    return "Center"
  }
  if (x === 0 && y > 0) {
    return "Between 1 and 2"
  }
  if (x === 0 && y < 0) {
    return "Between 3 and 4"
  }
  if (x > 0 && y === 0) {
    return "Between 4 and 1"
  }
  if (x < 0 && y === 0) {
    return "Between 2 and 3"
  }
}


const objectToQueryString = (data) =>
  encodeURIComponent(Object.entries(data).map(element =>
    element.join("=")).join("&"))


const getIn = (object, path, defaultValue) =>
  path.reduce(((object, property) => {
    if (object && object.hasOwnProperty(property)) {
      return object[property]
    }
    else {
      return defaultValue
    }
  }),
  object)


console.log(plus(1, 2, 3, 4))
console.log(multiply(1, 2))
console.log(multiplyAll(1, 2, 3, 4))
console.log(mergeArrays([1, 2, 3], [4, 5]))
console.log(filterFemales(people))
console.log(getQuadrant(1, 2))
console.log(objectToQueryString({ name1: 'John', name2: 'Федор' }, 'https://vk.com?'))
console.log(getIn({ address: { street: "Кутузовский проспект"}}, ['address', 'street'], 'Бомж'))
