let numero;

do {
  numero = parseFloat(prompt("Introduce un número:"));

  if (numero >= 0) {
    alert("El cuadrado de " + numero + " es " + (numero ** 2));
  }

} while (numero >= 0);

alert("Has introducido un número negativo. Fin del programa.");