'use strict'
window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const taskList = document.querySelector('#tasks');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value
    // const task = {
    //   title: title.value,
    //   desc: desc.value,
    //   date: date.value
    // }
    if(!task) {
      alert('please fill out task')
      return;
    }
    const taskEl = document.createElement('div')
    taskEl.classList.add('task')
    console.log(taskEl)
    const taskContentEL = document.createElement('div')
    taskContentEL.classList.add('content')
    taskEl.appendChild(taskContentEL)
    /* 
      <div class='content>
        <h1></h1>
        <p></p>
        <p></p>
        <button><button>
      </div>
      const title = document.createElement('h1')
      const description = document.createElement('p')
      const date = document.createElement('p')
      const button = document.createElement('button')
    */
    const taskInputEL = document.createElement('input')
    taskInputEL.classList.add('text')
    taskInputEL.type = 'text'

    taskInputEL.value = task
    taskInputEL.setAttribute('readonly', 'readonly')
    taskContentEL.appendChild(taskInputEL)
    
    const taskActionsEl = document.createElement('div');
    taskActionsEl.classList.add('actions')

    /*const taskEditEl = document.createElement('button');
    taskEditEl.classList.add('edit')
    taskEditEl.innerHTML = 'Edit'*/


    const taskDeleteEl = document.createElement('button');
    taskDeleteEl.classList.add('delete')
    taskDeleteEl.innerHTML = 'Delete'

    //taskActionsEl.appendChild(taskEditEl)
    taskActionsEl.appendChild(taskDeleteEl)
    taskEl.appendChild(taskActionsEl)
    input.value = ''
    taskEditEl.addEventListener('click', () => {
      if(taskEditEl.innerText.toLowerCase() === 'edit') {
        taskInputEL.removeAttribute("readonly")
        taskInputEL.focus()
        taskEditEl.innerText = 'Save'
      } else {
        taskInputEL.setAttribute('readonly', 'readonly')
        taskEditEl.innerText = 'Edit'
      }
    })
    taskDeleteEl.addEventListener('click', () => {
      taskList.removeChild(taskEl)
    })
    taskList.appendChild(taskEl)
  })
})

//linear-gradient(252.95deg, #6302ad 9.18%, #a00098 96.97%);