//2-Crear un script que solicite al usuario mediante un prompt el nombre de
//ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
//debe mostrar el arreglo generado, luego realizar las siguientes acciones:
//Mostrar la longitud del arreglo.
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
//Añade en última posición la ciudad de París.
//Escribe por pantalla el elemento que ocupa la segunda posición.
//Sustituye el elemento que ocupa la segunda posición por la ciudad de Barcelona

//Declaramos un booleano
let opcion = true;
const Ciudades = []; //Se crea un array vacio
//Mientras la opcion sea verdadera (true) ejecutara el bucle
while (opcion) {
  //Preguntamos si desea continuar
  opcion = confirm("¿Desea agregar una ciudad?");
  //Si la opcion es distinta a true
  if (!opcion) {
    break; //Salimos del bucle
  }
  //Solicitamos por teclado una ciudad y lo agregamos al final del arreglo
  const ciudad = prompt("Ingrese una ciudad: ");
  Ciudades.push(ciudad);
}
//Recorremos el array mostrando las ciudades almacenadas
for (let i = 0; i < Ciudades.length; i++) {
  console.log(Ciudades[i]);
}
document.writeln(`<ul>`);
//Mostramos la longitud del arreglo
document.writeln(
  `<p>El arreglo de ciudades tiene ${Ciudades.length} elementos</p>`
);

//Mostrar item en primera posicion
document.writeln(`<li>Elemento 1er Posicion: ${Ciudades[1]}</li>`);
//Mostrar item en tercera posicion
document.writeln(`<li>Elemento 3er Posicion: ${Ciudades[3]}</li>`);
//Mostrar item en ultima posicion
document.writeln(
  `<li>Elemento ultima Posicion: ${Ciudades[Ciudades.length - 1]}</li>`
);
//Añadimos en la ultima posicion la ciudad Paris
Ciudades.push("Paris");
document.writeln(
  `<li>Elemento ultima Posicion: ${Ciudades[Ciudades.length - 1]}</li>`
);
//Mostrar elementos que ocupa la segunda posicion
document.writeln(`<li>${Ciudades[2]}</li>`);
//Sustituimos el elementos que ocupa la posicion 2 por la ciudad barcelona
Ciudades[2] = "Barcelona";
document.writeln(`<li>${Ciudades[2]}</li>`);

//Arreglo con todas las ciudades
document.writeln(`<h2>Arreglo de ciudades</h2>`);
for (let j = 0; j < Ciudades.length; j++) {
  document.writeln(`<li>Ciudades: ${Ciudades[j]}</li>`);
}
document.writeln(`</ul>`);
