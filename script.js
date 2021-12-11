let createBtn = document.getElementById('criar-tarefa')
let selectOl = document.getElementById('lista-tarefas')
function createLi() {
    let getInput = document.getElementById('texto-tarefa')
    newLi = document.createElement('li')
    selectOl.appendChild(newLi)
    newLi.innerText = getInput.value
    getInput.value = ''
}
createBtn.addEventListener('click', createLi)

let selectInput = document.getElementById('texto-tarefa')
function submitEnter(e) {
    if (e.key === 'Enter') {
        createLi()
    }
}
selectInput.addEventListener('keyup', submitEnter)

let olChild = selectOl.children
function changeBg(e) {
    for (let i=0;i<olChild.length;i+=1) {
        olChild[i].classList.remove('selected')
    }
    e.target.classList.add('selected')
}
selectOl.addEventListener('click', changeBg)

function completedLi(e) {
    if (e.target.classList.contains('completed')) {
        e.target.classList.remove('completed')
    } else {
        e.target.classList.add('completed')
    }
}
selectOl.addEventListener('dblclick', completedLi)