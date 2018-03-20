const redditApiUrl = 'https://www.reddit.com/top.json'


const generatePostEntry = (imageSrc) => {
  postBlock = `<div class="media"> \
    <div class="media-left"> \
      <img src="${imageSrc}" onerror="this.src=default.jpg" class="media-object" style="width:60px"> \
    </div> \
    <div class="media-body"> \
      <h4 class="media-heading">Left-aligned</h4> \
      <a href="${postLink}">${postTitle}</p> \
    </div> \
  </div> \
  `
  document.getElementById('container').innerHTML += postBlock
}

fetch(redditApiUrl)
  .then((response) => response.json())
  .then(data => generatePostEntry(data))
  .catch(error => console.log(error));
