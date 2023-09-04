document.addEventListener("DOMContentLoaded", function () {

    //Los envío a la dirección indicada utilizando fetch y el método post al pulsar el boton enviar

    let form = document.getElementById("formulario");
    
    const url = " https://jsonplaceholder.typicode.com/users";

    form.addEventListener("submit", post);

    async function post(e) {
    e.preventDefault();
        //Obtengo los datos del formulario
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("fecha").value;

    //Creo una variable que incluye los datos
    let datos = {
        nomb: nombre,  
        ape: apellido, 
        fech: fecha }; 

    fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
        }
     })





