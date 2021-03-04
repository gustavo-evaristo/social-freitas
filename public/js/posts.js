const socket = io('http://localhost:3000')

function renderNewPost(post){
  $('.main-content').append(post.description + post.id)
}


socket.on('newPost', newPost => {
  renderNewPost(newPost)
})