// Parte 1: Sueldos

// Se solicita al usuario cuántos sueldos va a ingresar
let N = parseInt(prompt("¿Cuántos sueldos vas a ingresar en total?"));

let sueldos = [];
for (let i = 0; i < N; i++) {
  let sueldo = parseFloat(prompt(`Ingresa el sueldo #${i + 1}:`));
  sueldos.push(sueldo);
}

// Calculamos el sueldo máximo, mínimo y promedio
let sueldoMaximo = Math.max(...sueldos);


// Mostramos resultados en consola
console.log("Sueldos ingresados:", sueldos);
console.log("Sueldo máximo:", sueldoMaximo);

// Mostramos resultados con alert
alert(`Sueldo máximo: ${sueldoMaximo}\nSueldos ingresados: ${sueldos.join(', ')}`);

