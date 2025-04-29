// Parte 1: Sueldos

// Se solicita al usuario cuántos sueldos va a ingresar
// Pedimos al usuario la cantidad de sueldos que va a ingresar
let N = parseInt(prompt("¿Cuántos sueldos vas a ingresar?"));

let sueldos = [];
for (let i = 0; i < N; i++) {
  let sueldo = parseFloat(prompt(`Ingresa el sueldo #${i + 1}:`));
  sueldos.push(sueldo);
}

// Buscamos el sueldo máximo
let sueldoMaximo = Math.max(...sueldos);

// Mostramos el resultado
alert(`El sueldo máximo es: ${sueldoMaximo}`);

