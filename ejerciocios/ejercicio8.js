// Parte 1: Sueldos

// Se solicita al usuario cuántos sueldos va a ingresar
let N = parseInt(prompt("¿Cuántos sueldos vas a ingresar?"));

// Verifica que N sea un número válido y mayor que 0
if (!isNaN(N) && N > 0) {
  let sueldos = []; // Arreglo donde se almacenarán los sueldos

  // Bucle para pedir N sueldos
  for (let i = 0; i < N; i++) {
    let sueldo = parseFloat(prompt(`Ingresa el sueldo #${i + 1}:`));
    
    // Verifica que el sueldo sea un número válido
    if (!isNaN(sueldo)) {
      sueldos.push(sueldo); // Agrega el sueldo al arreglo
    } else {
      alert("Sueldo inválido. Se omitirá."); // Muestra alerta si el valor es inválido
    }
  }

  // Calcula el sueldo máximo utilizando Math.max y el operador spread (...)
  let maxSueldo = Math.max(...sueldos);

  // Muestra el sueldo máximo en consola
  console.log("El sueldo máximo es: $" + maxSueldo);
} else {
  // Si N no es válido, muestra una alerta
  alert("Número inválido.");
}
