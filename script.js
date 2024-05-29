let main = document.createElement('main')
main.className = 'container'

document.body.prepend(main)

let projectName = document.createElement('h1')
projectName.innerHTML = "Let's do it"
main.append(projectName)

let listBlock = document.createElement('div')
listBlock.className = 'mainBlock'
main.append(listBlock)

let firsDiv = document.createElement('div')
listBlock.append(firsDiv)

let texIn = document.createElement('input')
texIn.className = 'texIn'
texIn.setAttribute('placeholder', 'Gonna do...')
firsDiv.append(texIn)

let setDate = document.createElement('input')
setDate.className = 'setDate'
setDate.setAttribute('type', 'date')
firsDiv.append(setDate)

let addBtn = document.createElement('button')
addBtn.innerHTML = 'ADD'
addBtn.id = 'addBtn'
firsDiv.append(addBtn)

let list = document.createElement('ul')
listBlock.append(list)

const addTodo = () => {
	let newTask = texIn.value
	let date = setDate.value

	let li = document.createElement('li')
	li.className = 'taskItem'

	let doneBtn = document.createElement('img')
	doneBtn.src = 'done.png'
	doneBtn.className = 'btn'
	doneBtn.d = 'Done'
	doneBtn.addEventListener('click', () => {
		li.classList.toggle('completed')
	})

	let deleteBtn = document.createElement('img')
	deleteBtn.src = 'delete.png'
	deleteBtn.className = 'btn'
	deleteBtn.d = 'Delete'
	deleteBtn.addEventListener('click', () => {
		li.remove()
	})

	let label = document.createElement('label')
	label.append(newTask + ' - ' + date)
	li.append(label)
	// li.append(newTask)
	// li.append(date)
	li.append(doneBtn)
	li.append(deleteBtn)
	list.append(li)

	texIn.value = ''
	setDate.value = ''
}

addBtn.addEventListener('click', addTodo)
