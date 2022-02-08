const url = 'https://api.github.com/users/jocelyninlay'
fetch(url)
.then(function(response) {
    console.log(response)
    return response.json()
})
.then(function(data){
document.querySelector('#image').innerHTML = `<img src =${data.avatar_url} />`
document.querySelector('#name').innerHTML = `<h2>${data.name}</h2>`
document.querySelector('#location').innerHTML = `<p><b>Location:</b> ${data.location}</p>`
document.querySelector('#urls').innerHTML = `<p><b>GitHub URL:</b> ${data.url}</p>`
document.querySelector('#user-name').innerHTML = `<p><b>GitHub username:</b> ${data.login}</p>`
})

const repos = 'https://api.github.com/users/jocelyninlay/repos'
fetch(repos)
.then(function(response) {
    console.log(response)
    return response.json()
})
.then(function(data){
    document.querySelector('#repos').innerHTML = `<img src =${data.avatar_url} />`
})