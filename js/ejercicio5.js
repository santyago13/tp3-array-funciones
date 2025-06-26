/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
  sólo por minúsculas o por una mezcla de ambas. */

function analizarCadena(texto) {
  if (texto === texto.toUpperCase()) {
    document.writeln("La cadena está formada sólo por mayúsculas.");
  } else if (texto === texto.toLowerCase()) {
    document.writeln("La cadena está formada sólo por minúsculas.");
  } else {
    document.writeln("La cadena es una mezcla de mayúsculas y minúsculas.");
  }
}

const entrada = prompt("Ingrese una cadena de texto:");
analizarCadena(entrada);

