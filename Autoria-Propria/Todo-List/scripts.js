const list = JSON.parse(localStorage.getItem('lista_todos')) || []
const inputTodo = document.querySelector('#input')
const listTodo = document.querySelector('#list')
// const btnAdd = document.querySelector('#input-button')
// const btnEdit = document.querySelector('#edit')
// const btnDelete = document.querySelector('#delete')

// ADD TODO
function addTodo() {
    if (inputTodo.value == '') {
        window.alert('[ERRO] Nenhuma tarefa digitada!')
    } else {
        list.push(inputTodo.value)
        save()
        renderTodo()
        inputTodo.value = ''
    }
}

// RENDER TODO
function renderTodo() {
    listTodo.innerHTML = ''

    if (list.length === 0) {
        listTodo.innerHTML += '<li>Nenhuma tarefa adicionada, adicione algumas!</li>'
    } else {
        for (let i = 0; i < list.length; i++) {
            let position = list.indexOf(list[i])

            listTodo.innerHTML += `<li>${list[i]}<button id="edit" onclick="editTodo(${position})"><span class='material-symbols-outlined' id='edit'>edit</span></button><button id="delete" onclick="deleteTodo(${position})"><span class='material-symbols-outlined' id='delete'>delete</span></button></li>`
        }
    }    
}

// SAVE TODO ON LOCALSTORAGE
function save() {
    localStorage.setItem('lista_todos', JSON.stringify(list))
}

// DELETE TODO
function deleteTodo(position) {
    // deletePopUp()
    list.splice(position, 1)
    
    save()
    renderTodo()
}

// EDIT TODO
function editTodo(position) {
    // editPopUp()
    var newTodo = window.prompt('Digite a tarefa')

    list[position] = newTodo

    save()
    renderTodo()
}

// TODO: FINALIZAR OS POP-UP
// EDIT TODO POP UP WINDOW
// function editPopUp() {
//     var popUpWindow = window.open('edit-pop-up.html', 'editTodo', 'width=500px, height=350px')

//     // POP-UP EDIT
//     popUpWindow.document.head = '<link rel="stylesheet" href="pop-up.css">'
//     popUpWindow.document.write(`<h1>Editar Tarefa</h1>`)
// }

// DELETE TODO POP UP WINDOW
// function deletePopUp() {
//     var popUpWindow = window.open('edit-pop-up.html', 'editTodo', 'width=500px, height=350px')
// }

//  CALLING FUNCTION TO RENDER FIRST TIME THE TODO LIST
renderTodo()
