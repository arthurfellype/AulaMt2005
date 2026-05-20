//https://api.github.com/users/arthurfellype/repos

const input = document.querySelector('.input-text');
const ul = document.querySelector('.repos');

const allRepositories = []

function render(repos, filter){
    ul.innerHTML = '';

    const filteredRepos = repos.filter(repo => {
        if(filter){
            return repo.name.includes(filter)
        }
        return true
    })
    filteredRepos.array.forEach(repo => {
        const li = document.createElement('li')
        const textItem = document.createTextNode(repo.name)
        li.appendChild(textItem)
        ul.appendChild(li)
    });
}