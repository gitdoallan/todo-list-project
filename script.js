const createBtn = document.getElementById('criar-tarefa')
const selectOl = document.getElementById('lista-tarefas')
function createLi() {
    let getInput = document.getElementById('texto-tarefa')
    newLi = document.createElement('li')
    selectOl.appendChild(newLi)
    newLi.innerText = getInput.value
    getInput.value = ''
}
createBtn.addEventListener('click', createLi)

const selectInput = document.getElementById('texto-tarefa')
function submitEnter(e) {
    if (e.key === 'Enter') {
        createLi()
    }
}
selectInput.addEventListener('keyup', submitEnter)

const olChild = selectOl.children
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

const eraseBtn = document.getElementById('apaga-tudo')
function erase() {
    selectOl.innerHTML = ''
}
eraseBtn.addEventListener('click', erase)

const removeBtn = document.getElementById('remover-finalizados')
function removeCompleted() {
    for (let i=0;i<olChild.length;i+=1) {
        if (olChild[i].classList.contains('completed')) {
            olChild[i].remove()
            i-=1
        }
    }
}
removeBtn.addEventListener('click', removeCompleted)

const removeSelectedBtn = document.getElementById('remover-selecionado')
function removeSelected() {
    for (let i=0;i<olChild.length;i+=1) {
        if (olChild[i].classList.contains('selected')) {
            olChild[i].remove()
        }
    }
}
removeSelectedBtn.addEventListener('click', removeSelected)
