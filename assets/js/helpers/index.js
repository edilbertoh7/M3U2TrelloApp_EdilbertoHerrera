

function startDiv(valor) {

    const draggableElement = document.querySelector("#" + valor);

    draggableElement.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", draggableElement.id);
    });

    for (const dropZone of document.querySelectorAll(".card-container")) {

        dropZone.addEventListener("dragover", e => {
            e.preventDefault();
        });

        /*dropZone.addEventListener("dragleave", e => {
            //dropZone.classList.remove("drop-zone--over");
        })*/

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



