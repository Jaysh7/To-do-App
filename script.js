"use strict";
window.addEventListener("load", () => {
  let cardList = document.querySelector(".card-container");
  let form = document.querySelector("#form");
  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  let date = document.querySelector("#date");
  
  //+ button functions
  form.addEventListener("submit", (e) => { 
    e.preventDefault();
    let task = {
      title: title.value,
      description: description.value,
      date: date.value,
    };

  //If values are not given
    if (Object.values(task).includes("")) {
      alert("fill the input");
      return;
    }

    const taskEl = document.createElement('div');
    taskEl.classList.add('card');

    //card => title 
    const inputTitle = document.createElement('input');
    inputTitle.classList.add('title')
    inputTitle.type='text'
    inputTitle.value= task.title
    inputTitle.setAttribute('readonly' , 'readonly')
    taskEl.appendChild(inputTitle)
    
    //card => description 
    const inputDesc = document.createElement('input'); 
    inputDesc.classList.add('desc')
    inputDesc.type='text'
    inputDesc.value= task.description
    inputDesc.setAttribute('readonly' , 'readonly')
    taskEl.appendChild(inputDesc)

    //card => date
    const inputDate = document.createElement('p'); 
    inputDate.innerHTML = task.date
    taskEl.appendChild(inputDate)
    cardList.appendChild(taskEl)
   
    const buttonCont = document.createElement('div');
    buttonCont.classList.add('button-wrap')
    cardList.appendChild(buttonCont)
    
    //edit and delete button 
    const editbutton = document.createElement('button')
    editbutton.classList.add('edit')
    editbutton.innerHTML='Edit'
    buttonCont.appendChild(editbutton)
    taskEl.appendChild(buttonCont)

    const delbutton = document.createElement('button');
    delbutton.classList.add('delete')
    delbutton.innerHTML = ' '
    buttonCont.appendChild(delbutton)
    taskEl.appendChild(buttonCont)
    
    const delImg = document.createElement('img')
    delImg.src  = 'trash-outline.svg'
    document.querySelector('.delete').appendChild(delImg)
    delbutton.appendChild(delImg)

    editbutton.addEventListener('click', () => {
      if(editbutton.innerText.toLowerCase() === 'edit') {
        inputTitle.removeAttribute("readonly")
        inputTitle.focus()
        inputDesc.removeAttribute("readonly")
        inputDesc.focus()
        editbutton.innerText = 'Save'
      } else {
        inputTitle.setAttribute('readonly', 'readonly')
        inputDesc.setAttribute('readonly', 'readonly')
        editbutton.innerText = 'Edit'
      }
    })

    delbutton.addEventListener('click', () => {
      cardList.removeChild(taskEl)
    })

    //values must be taken only once
    title.value=""
    description.value=""
    date.value="" 

  });
    
});

