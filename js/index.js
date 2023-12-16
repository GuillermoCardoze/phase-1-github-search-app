const form = document.getElementById('github-form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const search = document.getElementById("search").value

    const originalName = search.split(' ').join('')

    document.getElementById("github-container").innerHTML = ""
    


    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById('github-container').innerHTML = `
        <a target="_blank" href="https://github.com/${originalName}"><img src="${data.avatar_url}"/>
        `

    })
})