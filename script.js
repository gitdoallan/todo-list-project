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

const moveUpBtn = document.getElementById('mover-cima')
function moveUp() {
    for (let i=0;i<olChild.length;i+=1) {

        if (olChild[i].classList.contains('selected') && olChild[i] !== olChild[0]) {
            saveUpInfo = olChild[i-1].innerText
            saveUpClass = olChild[i-1].className
            olChild[i-1].className = olChild[i].className
            olChild[i-1].innerText = olChild[i].innerText
            olChild[i].className = saveUpClass
            olChild[i].innerText = saveUpInfo
        }
    }
}
moveUpBtn.addEventListener('click', moveUp)

const moveDownBtn = document.getElementById('mover-baixo')
function moveDown() {
    let childSize = olChild.length-1
    for (let i=childSize; i>=0; i-=1) {
        if (olChild[i].classList.contains('selected') && olChild[i] !== olChild[childSize]) {
            saveDownInfo = olChild[i+1].innerText
            saveDownClass = olChild[i+1].className
            olChild[i+1].innerText = olChild[i].innerText
            olChild[i+1].className = olChild[i].className
            olChild[i].innerText = saveDownInfo
            olChild[i].className = saveDownClass
        }
    }
}
moveDownBtn.addEventListener('click', moveDown)

const saveBtn = document.getElementById('salvar-tarefas')
function saveList() {
    let theList = []
    let theListClasses = []
    for (let i=0;i<olChild.length;i+=1) {
        theList.push(olChild[i].innerText)
        theListClasses.push(olChild[i].className)
    }
    localStorage.setItem('getText', JSON.stringify(theList))
    localStorage.setItem('getClasses', JSON.stringify(theListClasses))
    console.log('saved!')
}
saveBtn.addEventListener('click', saveList)

function getTheList() {
    if (localStorage.getItem('getText') === null) {
        localStorage.setItem('getText', JSON.stringify([]))
        localStorage.setItem('getClasses', JSON.stringify([]))
    } else {
        let getList = JSON.parse(localStorage.getItem('getText'))
        let getClasses = JSON.parse(localStorage.getItem('getClasses'))
        for (let i=0;i<getList.length;i+=1) {
            getLi = document.createElement('li')
            selectOl.appendChild(getLi)
            getLi.innerHTML = getList[i]
            getLi.className = getClasses[i]
        }
    }
}


getTheList()