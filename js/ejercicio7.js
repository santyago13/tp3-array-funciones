// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del
// 1 al 10 del número elegido por el usuario.
function generarTablaMultiplicar(numero) {
  document.writeln(`Tabla de multiplicar del ${numero}:`);  
  for (let i = 1; i <= 10; i++) {
    document.writeln(`${numero}x${i}=${numero * i} - `);
  }
}

const numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
if (!isNaN(numero)) {
  generarTablaMultiplicar(numero);
} else {
  alert("Por favor ingrese un número válido.");
}