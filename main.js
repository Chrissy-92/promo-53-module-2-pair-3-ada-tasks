'use strict'
const texTaskAdd = document.querySelector('.js-text-task-add');
const btnAdd = document.querySelector('.js-btn-add');
const textTaskFilter = document.querySelector('.js-text-task-filter');
const btnFilter = document.querySelector('.js-btn-filter');

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: true,
    id: 4,
  },
];

let taskElement = "";
let lista = document.querySelector(".task-list");
let task = "";

for (const task of tasks) {
  taskElement += `<li>
      <input 
        type="checkbox" 
        id="task-${task.id}" 
        ${task.completed ? "" : "checked"}
      />
      <label for="task-${task.id}">${task.name}</label>
    </li>`;
};

lista.innerHTML = taskElement; // Añadimos el contenido a la lista

// checkbox de la lista
lista.addEventListener("change", (ev) => {
  // ¿Ha cambiado un checkbox?
  if (ev.target.matches('input[type="checkbox"]')) {
    const checkbox = ev.target;
    // Buscamos el <label> asociado
    const label = lista.querySelector(`label[for="${checkbox.id}"]`);
    // Toggle de la clase .tachado según esté marcado o no
    label.classList.toggle("tachado", checkbox.checked);
  }
});


btnAdd.addEventListener('click', (ev) => {
  ev.preventDefault();
  const taskValue = texTaskAdd.value;
  taskElement = taskValue;
  lista.innerHTML += taskElement;
  console.log(taskValue);
});

renderAllTasks = () => {
  let html='';

  for (task of tasks) {
    html += renderOneTask(task);
  }

  lista.innerHTML = html;
}

const handleClickList = (ev) => {
  ev.preventDefault();

  const filterInput = textTaskFilter.value;
  console.log(filterInput);
  const tasksFiltered = tasks.filter( (tasks) => tasks.id === filterInput);
  console.log(tasksFiltered);

  renderAllTasks(tasksFiltered);

};

btnFilter.addEventListener('click', handleClickList);

renderAllTasks(tasks);

    