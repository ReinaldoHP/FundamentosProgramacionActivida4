// Pedir al usuario un número
let numero = parseInt(prompt("Introduce un número para calcular su factorial:"));

// Verificar que sea un número válido
if (isNaN(numero) || numero < 0) {
  alert("Por favor, introduce un número entero no negativo.");
} else {
  // Calcular el factorial
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  // Mostrar el resultado
  alert(`El factorial de ${numero} es ${factorial}`);
}
