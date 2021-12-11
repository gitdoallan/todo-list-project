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