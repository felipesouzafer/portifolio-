function getProjects(){
    const urlGitHub = 'https://api.github.com/users/felipesouzafer/repos'
  

    fetch(urlGitHub,{
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            showProjects(response)
            console.log(response)
        })
        .catch((e) => {
            console.log(`Error -> ${e}`)
        })
}

     function showProjects(data){
         var listElement = document.getElementById('my-project-list')

         for(let i = 0; i < data.lenght; i++){
            let a = document.createElement("a")
            a.href = data[i]['clone_url']
            a.target = '_blank'
            a.title = data.[i]['descripton']
            let linkText = document.createTextNode( data[i]['name'])
            a.appendChild(linkText)
            listElement.appendChild(a)
         }
     }




getProjects()