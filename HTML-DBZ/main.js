window.addEventListener("load", () => {

  /* alert("hola mundo"); */
  let a = 4;

  function b() {
    let b = 5;
    return b;
  }

  let suma = a + b();

  console.log(suma);

  let texto = document.getElementById("text");
  let mostrar = document.getElementById("submit");
  let parrafo = document.getElementById("p");

  mostrar.addEventListener("click", () => {
    parrafo.textContent = texto.value;
  });

  /* let name = prompt("ingresa tu nombre");
  localStorage.setItem("name", name);
  const div = document.getElementById("div");
  const h1 = document.createElement("h1");
  h1.textContent = `Binvenid@ ${name} al Mundo JS!`;
  div.appendChild(h1);
  */
  let array = ["1234", "hola mundo", "javascript", "4s4d0s"];
  let objAutos = [
    {
      name: "ford",
      año: "2000",
    },
    {
      name: "toyota",
      año: "2005",
    },
    {
      name: "nissan",
      año: "2015",
    },
  ];

  const copyArray = array.find((i) => {
    if (i == "1234") {
      console.log(i);
    }
    console.log(i);
  });

  console.log("usando FIND");
  objAutos.find((i) => {
    console.log(i);
  });

  console.log("usando FILTER");
  objAutos.filter((obj) => {
    console.log(obj.name);
  });

  $("table").hide("slow");

  let $inicio = $("#inicio");
  let $catalogo = $("#catalogo");
  $catalogo.click(() => {
    $("#primerPage").hide("slow");
    $("table").show();
  });

});
