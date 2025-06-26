// 4- Escribir el código de una función a la que se pasa como parámetro un número entero
//  y devuelve como resultado una cadena de texto que indica si el número es par o impar.
//  Mostrar por pantalla el resultado devuelto por la función.

  function ParOImpar(numero) {
      if (numero % 2 === 0) {
        document.writeln(`<p>El número ${numero} es par</p>`);
      } else {
        document.writeln(`<p>El número ${numero} es impar</p>`);
      }
    }
     
    const num = parseInt(prompt("Ingrese un número entero:"));
    ParOImpar(num);