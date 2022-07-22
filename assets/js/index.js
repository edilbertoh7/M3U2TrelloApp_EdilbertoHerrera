
const Task = document.querySelector('#task');
console.log(Task);


const Contenedor1 = document.querySelector('#contenedor1');
const Contenedor2 = document.querySelector('#contenedor2');
const Contenedor3 = document.querySelector('#contenedor3');


Contenedor1.addEventListener('dragover', e =>{
e.preventDefault();//evita que el navegador ejecute los eventos por defecto
console.log('dragOver');
});

Contenedor1.addEventListener('drop', e =>{
console.log('drop');
Contenedor1.appendChild(Task)
});
/********* */

Contenedor2.addEventListener('dragover', e =>{
e.preventDefault();//evita que el navegador ejecute los eventos por defecto
console.log('dragOver');
});

Contenedor2.addEventListener('drop', e =>{
console.log('drop');
Contenedor2.appendChild(Task)
});

/********* */

Contenedor3.addEventListener('dragover', e =>{
e.preventDefault();//evita que el navegador ejecute los eventos por defecto
console.log('dragOver');
});

Contenedor3.addEventListener('drop', e =>{
console.log('drop');
Contenedor3.appendChild(Task)
});