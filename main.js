'use strict'

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

let taskElement = "";
let lista = document.querySelector(".task-list");
let task ="";

for (const task of tasks) {
  taskElement += `<li>${task.name}</li>`; // Mostramos solo el nombre
  console.log(task.name); // Mostramos el nombre en la consola
  
}

lista.innerHTML = taskElement; // Añadimos el contenido a la lista

    