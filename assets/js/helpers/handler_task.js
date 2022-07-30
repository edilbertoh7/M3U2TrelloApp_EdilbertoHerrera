function new_task(title,description,end_date) {

  var responsible = document.getElementById("responsible");
var responsible = responsible.options[responsible.selectedIndex];


    const date = new Date(),
    dia = date.getDate(),
    mes = date.getMonth(),
    anio = date.getFullYear(),
    datenow = `${dia}/0${mes+1}/${anio}`
    
  

 const payload = {
        "id":1,
        "title":title,
        "person":responsible.text,
        "description":description,
        "state":"to_do",
        "deadline":end_date,
        "created":datenow
      };

    axios.post(`${API_URL}/task.json`, payload)
  .then(function (response) {
    //console.log(response.data);
    const parent = document.querySelector(".card-container");

    parent.innerHTML +=`
    <div onclick="llamado('${data.name}')" id="${data.name}"  draggable="true" class="taskin mt-2">
    <h4>${title}</h4>
    <h6>responsable: ${responsible}</h6>
    <h6>${description}</h6>
    <h6>fecha creacion ${datenow}</h6>
    <h6>fecha entrega ${end_date}</h6>
    <h6>Tarea por hacer</h6>

</div>
`
})
.catch(function (error) {
  console.log(error);
});
alert(`Tarea "${title}" creada`)
  setTimeout(() => {
    
      location.reload();
  }, 1000);
    
}

// actualizacion de tareas
function updateTask(id,state) {
 
  payload = {
    "state":state
  }

  axios.patch(`${API_URL}/task/${id}.json`, payload)
  .then(function (response) {
    //console.log(response);
    setTimeout(() => {
      
      location.reload();
    }, 1000);
  })
  .catch(function (error) {
    console.log(error);
  })
}
// eliminacion de treas
function deletetTask(id,title) {

if (confirm(`Esta seguro que desea eliminar la tarea "${title}"`)) {
  axios.delete(`${API_URL}/task/${id}.json`)
  .then(function (response) {
    //console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  
  setTimeout(() => {
      
    location.reload();
  }, 1000);
}

}