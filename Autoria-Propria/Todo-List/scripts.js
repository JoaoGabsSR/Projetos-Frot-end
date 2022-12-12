const tasks = JSON.parse(localStorage.getItem('lista_todos')) || ['Estudar HTML e CSS', 'Aprender Javascript', 'Arrumar Casa'],
      list = document.querySelector('.list'),
      todoAddField = document.getElementsByTagName('input'),
      addButton = document.getElementsByTagName('span')[0]

const renderList = () => {
    list.innerHTML = ''

    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += `<li><p>${tasks[i]}</p><a><span class='material-symbols-outlined' id='delete'>delete</span></a> <a><span class='material-symbols-outlined' id='edit'>edit</span></a></li>`
    }
}

const addTodo = () => {
    if (todoAddField.value == '') {
        window.alert('Você não digitou nenhuma tarefa, por favor digite-a')
        return false
    } else {
        let task = todoAddField.value
        console.log(task)
        tasks.push(task)
        todoAddField.value = ''
        renderList()
        saveData()
    }
}

const saveData = () => {
    localStorage.setItem('lista_todos', JSON.stringify(todos))
}

addButton.addEventListener('click', addTodo)

renderList()