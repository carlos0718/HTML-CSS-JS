let btnBuscar = document.getElementById('btn-search');

let nombre = $('#input-name');//document.getElementById('input-name');
let height = $('#input-height')//document.getElementById('input-height');
let gender = $('#input-gender')//document.getElementById('input-gender');
let hair = $('#input-hair')//document.getElementById('input-hair');
let eye = $('#input-eye')//document.getElementById('input-eye');
let planet = $('#input-planet')//document.getElementById('input-planet');

btnBuscar.addEventListener('click',cargarDatos());
function cargarDatos(){

    // se usa el random para que en cada evento clck se genere un nuevo personaje
    let i = Math.round(Math.random() * 80);
    
    $.ajax({
        type: 'GET',
        crossDomain:true,
        url:`https://swapi.dev/api/people/${i}`, // se usa string template para insertar parametros en la url
        dataType: "json",
        success: function (data) {

            console.log(data);
            /* localStorage.data = JSON.stringify(data) */
           
            nombre.val(data.name);
            height.val(data.height+'cm');
            gender.val(data.gender);
            hair.val(data.hair_color);
            eye.val(data.eye_color);
            planet.val(data.homeworld);
        }
    });
}
