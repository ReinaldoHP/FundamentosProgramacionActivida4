let numero = parseInt(prompt("Ingresa un número entre 1 y 10:"));
 
if (isNaN(numero) || numero < 1 || numero > 10) {
  alert("Número inválido. Debe estar entre 1 y 10.");
} else {
  let tabla = "Tabla de multiplicar del " + numero + ":\n";
  for (let i = 1; i <= 10; i++) {
    tabla += numero + " x " + i + " = " + (numero * i) + "\n";
  }
  alert(tabla);
}
 