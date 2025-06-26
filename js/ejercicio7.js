// Función para generar la tabla de multiplicar
function generarTablaMultiplicar(numero) {
  document.writeln(`Tabla de multiplicar del ${numero}:`);
  
  for (let i = 1; i <= 10; i++) {
    document.writeln(`${numero}x${i}=${numero * i} - `);
  }
}

// Solicitar número al usuario
const numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

// Verificar que sea un número válido
if (!isNaN(numero)) {
  generarTablaMultiplicar(numero);
} else {
  alert("Por favor ingrese un número válido.");
}