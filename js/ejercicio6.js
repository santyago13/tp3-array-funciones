// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
//  luego crear una función para calcular su perímetro y mostrarlo por pantalla.

function calcularPerimetro(a, b) {
  return 2 * (a + b);
}

// aqui pido valores al usuario
const ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:"));
const ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));

// aqui verifica los numeros
if (isNaN(ladoA) || isNaN(ladoB)) {
  alert("Por favor, ingrese valores numéricos válidos.");
} else {
  const perimetro = calcularPerimetro(ladoA, ladoB);
  alert(`El perímetro del rectángulo es: ${perimetro}`);
}