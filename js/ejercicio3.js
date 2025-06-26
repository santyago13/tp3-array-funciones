//  3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random
//  para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar
//  el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0] 

for(let i=0; i<50; i++){
const dado1 = parseInt(Math.random() * 6 + 1);
const dado2 = parseInt(Math.random() * 6 + 1);
console.log(suma = dado1 + dado2);
apariciones[suma]++
}

document.writeln(`<table class=m-3>`)
document.writeln(`<tr class=border-4>`)
document.writeln(`<th class=border-4>Suma</th>`)
document.writeln(`<th class=border-4>Apariciones</th>`)
document.writeln(`</tr>`)
for (let i = 2; i <= 12; i++) {
    document.writeln(`<tr class=border-4>`)
  document.writeln(`<td class=border-4>${i}</td>`)
  document.writeln(`<td class=border-4>${apariciones[i]}</td>`);
  document.writeln(`</tr>`)

}
document.writeln(`</table>`)