
let parent = null;
const API_URL = "https://telloapp-b8a8f-default-rtdb.firebaseio.com";
axios.get(`${API_URL}/task.json`)
    .then(function (response) {

        const data = response.data

        for (const property in data) {
            //segun el estado de la tarea se ubicara en la columna correspondiente
            if (data[property].state == "to_do") {
                state = "Tarea por hacer";
                parent = document.querySelector(".to_do");
            } else if (data[property].state == "in_progress") {
                state = "Tarea en progreso";
                parent = document.querySelector(".in_progress");
            } else if (data[property].state == "done") {
                state = "Tarea terminada"
                parent = document.querySelector(".done");
            }

            parent.innerHTML += `
         <div onclick="startDiv('${property}')" id="${property}" ondblclick="deletetTask('${property}','${data[property].title}')"  draggable="true" class="taskin mt-2">
         <h4>${data[property].title}</h4>
         <h6>responsable: ${data[property].person}</h6>
         <h6>${data[property].description}</h6>
         <h6>fecha creacion ${data[property].created}</h6>
         <h6>fecha entrega ${data[property].deadline}</h6>
         <h6>${state}</h6>
     </div>
     `
        }
    })
    .catch(function (error) {
        console.log('Error de conexion');
        console.log(error);
    });

function startDiv(valor) {

    const draggableElement = document.querySelector("#" + valor);

    draggableElement.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", draggableElement.id);
    });

    for (const dropZone of document.querySelectorAll(".card-container")) {

        dropZone.addEventListener("dragover", e => {
            e.preventDefault();
        });

        dropZone.addEventListener("dragleave", e => {
            //dropZone.classList.remove("drop-zone--over");
        })

        dropZone.addEventListener("drop", e => {
            e.preventDefault();
            const droppedElementId = e.dataTransfer.getData("text/plain");
            const droppedElement = document.getElementById(droppedElementId);
            updateTask(droppedElementId, dropZone.classList[1])
            dropZone.appendChild(droppedElement);
        });
    }
}
// preparacion del div para ser movido
(() => {
    setTimeout(() => {
        //ciclo para separar todos los id existentes en la clase
        const div = document.querySelectorAll('.taskin');
        for (let i = 0; i < div.length; i++) {
            document.getElementById(div[i].id).click()
            //console.log(div[i].id);
        }

    }, 1000);
})()