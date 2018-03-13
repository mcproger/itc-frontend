var people = [
  {
    name: "Person1",
    sex: "M",
    favouriteMovie: "Movie1",
  },
  {
    name: "Person2",
    sex: "F",
    favouriteMovie: "Movie2",
  },
  {
    name: "Person3",
    sex: "M",
    favouriteMovie: "Movie3",
  },
  {
    name: "Person4",
    sex: "F",
    favouriteMovie: "Movie4",
  },
]

function plus(...args) {
  return args.reduce(function(sum, current) {
    return sum + current
      }, 0)
}

function multiply(argOne, argTwo) {
  return argOne * argTwo
}

function multiplyAll(...args) {
  return args.reduce(function(mul, current) {
      return mul * current
        },
    1)
}

function mergeArrays(arrayOne, arrayTwo) {
  return arrayOne.concat(arrayTwo)
}

function filterFemales(people) {
  return people.filter(people => people.sex == "F")
}

function getQuadrant(x, y) {
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

function objectToQueryString(data) {
  let url = 'https://vk.com?'
  return encodeURI(url + Object.entries(data).map(function(element) {
      return element.join('=')
  }).join('&'))

}

function getIn(obj, path, defaul) {
  // if (obj.path.map(value => value).join('.')) {
  //   return obj.path.map(value => value).join('.')
  // }
  alert(path.forEach(function(item, i, arr) {return item}))
}

console.log(getIn({ address: { street: "Кутузовский проспект"}}, ['address', 'street'], 'Бомж'))
