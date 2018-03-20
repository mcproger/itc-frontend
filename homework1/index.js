const redditApiUrl = 'https://www.reddit.com/top.json'


const generatePostEntry = posts => {
  data.data.children.map(post => {
    postBlock = `<div class="media"> \
      <div class="media-left"> \
        <img src="${post.data.thumbnail}" onerror="this.src='default.jpg'" class="media-object" style="width:60px"> \
      </div> \
      <div class="media-body"> \
        <h4 class="media-heading"></h4> \
        <a href="${post.data.permalink}">${post.data.title}</p> \
      </div> \
    </div> \
    `
    document.getElementById('container').innerHTML += postBlock
  })
}


fetch(redditApiUrl)
  .then(response => response.json())
  .then(posts => generatePostEntry(posts))
  .catch(error => console.log(error));
