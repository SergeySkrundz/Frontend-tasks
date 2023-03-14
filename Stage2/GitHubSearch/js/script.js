const mainEl = document.querySelector('.main');
const wrapper = document.createElement('div');
wrapper.classList.add('comment-field');


const formEl = document.createElement('form');
formEl.classList.add('search');
formEl.addEventListener('submit', async (e) =>{

    wrapper.innerHTML = '';
    e.preventDefault();
    const inputValue = Object.fromEntries(new FormData(e.target));
    
    if (inputValue.name.length < 5){
        alert('Количество символов должно быть больше 5');
        return false;
    }

    const response = await fetch(`https://api.github.com/search/repositories?q=${inputValue.name}&per_page=10`);
    const data = await response.json();

    if (data.items.length > 0){
        createReposEl(data);
        mainEl.appendChild(wrapper);
    }else{
        alert('Ничего не найдено');
    }
})


const inputEl = document.createElement('input');
inputEl.classList.add('search-input');
inputEl.setAttribute('name', 'name');
inputEl.setAttribute('placeholder', 'Введите репозиторий для поиска');

const searchButtonEl = document.createElement('button');
searchButtonEl.classList.add('search-button');
searchButtonEl.setAttribute('type', 'submit');
searchButtonEl.innerHTML = 'Поиск';

formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
mainEl.appendChild(formEl);


function createReposEl(reposData) {

    const items = reposData.items

    wrapper.innerHTML='';
    let out = '';

    items.forEach(function(item){
        out += `<div class="profile">
            <img class="search-image" src=${item.owner.avatar_url}></img>
            <div class="content">
                <p class="list-reset search-text text-name"><span><b>Имя:</b> </span>${item.name}</p>
                <p class="list-reset search-text text-repos"><span><b>Репозиторий:</b> </span><a href="${item.html_url}" target="_blank">${item.html_url}</a></p>
            </div>
            
        </div>`
        
    })
    wrapper.innerHTML += out;
}