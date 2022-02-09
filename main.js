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
// this is the long way jeanette did it
// let username = document.createElement('h3')
// username.innerText = data.login
// ShadowRoot.appendChild(username)
return data.repos_url
})

.then(function(reposUrl){
console.log("the new reposUrl is working")
return fetch(reposUrl)
})

.then(function(result){
return result.json()
})

.then(function(data){
for (let repos of data){
    document.querySelector('#repos').innerHTML += `<a href=${repos.url}>${repos.name}</a>` 
}
})




// const repos = 'https://api.github.com/users/jocelyninlay/repos'
// fetch(repos)
// .then(function(response) {
//     console.log(response)
//     return response.json()
// })
// .then(function(data){
//  console.log(data)    
// document.querySelector('#repos').innerHTML += `<p><a href =${data.url}>${data.full_name}</a><p>`

//})