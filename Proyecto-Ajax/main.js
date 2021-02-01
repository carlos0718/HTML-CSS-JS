let bntBuscar = document.getElementById('btn-search');
let htmlForm = '';

let nombre = document.getElementById('input-name');
let heigth = document.getElementById('input-height');
let gender = document.getElementById('input-gender');
let hair = document.getElementById('input-hair');
let eye = document.getElementById('input-eye');
let url = document.getElementById('input-url');
let planet = document.getElementById('input-planet');
let number = document.getElementById('input-number');
let contenidoApi = '';

bntBuscar.addEventListener('click',cargarDatos);

function cargarDatos(){

    $.ajax({
        tyep: 'GET',
        croosDomain:true,
        url: "https://swapi.dev/api/people/",
        dataType: "json",
        success: function (data) {
            /* console.log(data); */

            contenidoApi = data;

            for (const i in contenidoApi) {
                nombre.innerText=`${contenidoApi[i].name}`
            }
        }
    });
}
