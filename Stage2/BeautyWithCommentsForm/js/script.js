let comments = [];
loadComments();


document.getElementById("form")
    .addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            document.getElementById("comment-add").click();
        }
    });


document.getElementById('comment-add').onclick = function(){
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now() / 1000)
    }

    if(commentName.value == "") {   
        document.getElementById('error').innerHTML = "Поле имя не заполнено";        
        return false;
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);
    saveComments();
    showComments();
}



function removeWarning() {
    document.getElementById('error').innerHTML = "";
}

document.getElementById('comment-name').onkeyup = removeWarning;




function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments (){
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item){
        out += `<div class="box-comment">
            <div class="title-comment">
                <p class="list-reset alert alert-primary" role="alert">${item.name}</p>
                <p class="list-reset text-right small"><em>${timeConverter(item.time)}</em></p>
            </div>
            <p class="list-reset alert alert-success" role="alert">${item.body}</p>
            <div id="box-button" class="box-button">
                <a href="#" class="alert-danger"  role="alert" data-time=${item.time}>
                    <img class="alert-alert-danger" src="img/icon-delete.png" alt="Пример">
                </a>
                <button id="btnh" class="btn-heart" ><i class="fa fa-heart heart" aria-hidden="true"></i></button>
            </div>
        </butt>`;
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    let today = new Date();
    let yesterday = new Date();
    let lastDate = new Date(UNIX_timestamp * 1000);

    yesterday.setDate(today.getDate() -1);

    let months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    let year = lastDate.getFullYear();
    let month = months[lastDate.getMonth()];
    let date = lastDate.getDate();
    let hour = lastDate.getHours();
    let min = lastDate.getMinutes();
    let sec = lastDate.getSeconds();
    let time;

    if(today.getDate() === lastDate.getDate()){
        time = 'Сегодня,' + ' ' + hour + ':' + min + ':' + sec ;
    }else if(yesterday.getDate() === lastDate.getDate()){
        time = 'Вчера,' + ' ' + hour + ':' + min + ':' + sec ;
    }else{
        time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    }
    return time;

}

document.getElementById('comment-field').addEventListener('click', function(e){
    if (e.target.matches('.alert-alert-danger')) {
        e.preventDefault();
        deleteComments(e.target);
    }else if (e.target.matches('.heart')) {
        changeLike(e.target);
    }
})

function deleteComments(deleteButton) {
    comments.splice(comments.findIndex(i => i.time == deleteButton.getAttribute('data-time')), 1);
    deleteButton.closest('.box-comment').remove();
    saveComments();
}

function changeLike(elem){
    if (elem.style.color == "red"){
        elem.style.color = "grey";
    }else{
        elem.style.color = "red";
    }
    
}




