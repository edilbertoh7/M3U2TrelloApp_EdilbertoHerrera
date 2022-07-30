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
    