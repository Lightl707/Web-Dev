const todoList = document.getElementById("do-tasks");

const addTaskButton = document.querySelector("#push");
let input = document.querySelector('#input')


document.querySelector('#push').onclick = function(){
        document.querySelector('.do-tasks').innerHTML += `
        <div class="card">
            <button class="done" onclick=ticking(this)>✓</button>
            <span class="text">
            ${document.querySelector('.task #input').value}
            </span>
            <button class="delete" onclick=deleting(this)><img src="trashbox.jpg" width="12"> </button>
        </div>
        `;
        document.querySelector('#input').value = ''
}
function ticking(tick){
    if(tick.style.color === 'black'){
        tick.style.color = 'white'
        tick.parentNode.querySelector('.text').style.textDecoration = 'none'
        tick.parentElement.style.background = 'orange'
    }else {
        tick.style.color = 'black'
        tick.parentNode.querySelector('.text').style.textDecoration = 'line-through'
        tick.parentElement.style.background = 'red'
    }
}

function deleting(ddd){
    ddd.parentNode.remove();
}