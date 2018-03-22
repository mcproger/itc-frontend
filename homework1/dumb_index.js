// Dumb method. Just because I can. And boring.

const redditApiUrl = 'https://www.reddit.com/top.json';


const createMediaBlockHtmlElement = () => {
  const div = document.createElement('div')
  div.className = 'media'
  document.getElementById('container').appendChild(div)
}


const appendElementToParentElement = (parentElementClass, element) => {
  parentElement = document.getElementsByClassName(parentElementClass)
  parentElement[parentElement.length - 1].appendChild(element)
}


const createDivHtmlElement = (className, parentElementClass) => {
  const div = document.createElement('div')
  div.className = className
  appendElementToParentElement(parentElementClass, div)
}


const createImageHtmlElement = (imageSource) => {
  createDivHtmlElement('media-left', 'media')
  const image = document.createElement('img')
  image.className = 'media-object'
  image.setAttribute('src', imageSource)
  image.setAttribute('onerror', "this.src='default.jpg'")
  image.setAttribute('style', 'width: 60px')
  appendElementToParentElement('media-left', image)
}


const createPostTitleHtmlElement = (title, link) => {
  createDivHtmlElement('media-body', 'media')
  const postLink = document.createElement('a')
  postLink.setAttribute('href', 'https://reddit.com' + link)
  postLink.innerHTML = title
  appendElementToParentElement('media-body', postLink)
}


const generatePostBlock = (imageSource, title, link) => {
  createMediaBlockHtmlElement()
  createImageHtmlElement(imageSource)
  createPostTitleHtmlElement(title, link)
}


const generatePostList = data => {
  data.data.children.map(value => {
    generatePostBlock(
      value.data.thumbnail,
      value.data.title,
      value.data.permalink,
    )
  })
}


fetch(redditApiUrl)
  .then((response) => response.json())
  .then(data => generatePostList(data))
  .catch(error => console.log(error));
