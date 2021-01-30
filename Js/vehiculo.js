class Vehiculo{

    constructor(mark, model, price)
    {
        this.mark = mark;
        this.model = model;
        this.price = price;
    }
}
class Moto extends Vehiculo{

    constructor(mark, model, cc,price)
    {
        super(mark,model,price);
        this.cc = cc;
    }
}

class Car extends Vehiculo{
    constructor(mark, model, door,price)
    {
        super(mark,model,price);
        this.door = door;
    }
}

let carOne = new Car('Peugeot', 206,4, '200.000,00');
let carTwo = new Car('Peugeot', 208 ,5,'250.000,00');
let motoOne = new Moto('Honda', 'Titan','125cc','60,000.00');
let motoTwo = new Moto('Yamaha','YBR','160cc','80.550,50');

console.log("Marca: "+ carOne.mark + " // " + "Modelo: "+carOne.model+" // "+" Puertas: "+carOne.door+" // "+" Precio: $"+carOne.price);
console.log("Marca: "+ motoOne.mark + " // " + "Modelo: "+motoOne.model+" // "+" Puertas: "+motoOne.cc+" // "+" Precio: $"+motoOne.price);
console.log("Marca: "+ carTwo.mark + " // " + "Modelo: "+carTwo.model+" // "+" Puertas: "+carTwo.door+" // "+" Precio: $"+carTwo.price);
console.log("Marca: "+ motoTwo.mark + " // " + "Modelo: "+motoTwo.model+" // "+" Puertas: "+motoTwo.cc+" // "+" Precio: $"+motoTwo.price);

console.log("==========================");

let arrayVehiculos = [
    {marca:'Peugeot', modelo:206,puertas:4,precio: '200.000,00'},
    {marca:'Peugeot', modelo:208 ,puertas:5,precio:'250.000,00'},
    {marca:'Honda', modelo:'Titan',cc:'125cc',precio:'60,000.00'},
    {marca:'Yamaha',modelo:'YBR',cc:'160cc',precio:'80.550,50'}
]

let j = 0;
let mayor = parseFloat(arrayVehiculos[0].precio);
// console.log(mayor);
for(let i= 1; i < 4; i++)
{
    if(parseFloat(arrayVehiculos[i].precio) > mayor)
    {
        mayor = arrayVehiculos[i].precio;
        j = i;
    }

}
console.log('Vehículo más caro: ' + arrayVehiculos[j].marca +' ' + arrayVehiculos[j].modelo);

//===========================

let menor = parseFloat(arrayVehiculos[j].precio)
// console.log(mayor);
for(let i= 1; i < 4; i++)
{
    if(parseFloat(arrayVehiculos[i].precio) <menor)
    {
        menor = arrayVehiculos[i].precio;
        j = i;
    }
}
console.log('Vehículo más barato: ' + arrayVehiculos[j].marca +' ' + arrayVehiculos[j].modelo);

//===========================
// console.log(arrayVehiculos[0].marca.split(''));

for(let i = 0; i < 4; i++)
{
    let arrayLetra = arrayVehiculos[i].marca.split('')
    
    let tam = arrayLetra.length;

    for(let j = 0; j < tam; j++)
    {
        if(arrayLetra[j] == "Y")
        {
            console.log('Vehículo que contiene en el modelo la letra ‘Y’: ' + arrayVehiculos[i].marca + ' ' + arrayVehiculos[i].modelo + ' ' + arrayVehiculos[i].precio);
            
        }
    }
}

console.log('==============================');
arrayVehiculos.sort(function(a,b)
{
    let p1 = parseFloat(a.precio);
    let p2 = parseFloat(b.precio);
    return p2 - p1;
})

// console.log(arrayVehiculos);
console.log('Vehículos ordenados por precio de mayor a menor: ')
for(let i = 0; i < 4; i++)
{
    console.log(arrayVehiculos[i].marca + ' ' +arrayVehiculos[i].modelo);

}