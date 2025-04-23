// Parte 1: Sueldos
let N = parseInt(prompt("¿Cuántos sueldos vas a ingresar?"));

if (!isNaN(N) && N > 0) {
  let sueldos = [];

  for (let i = 0; i < N; i++) {
    let sueldo = parseFloat(prompt(`Ingresa el sueldo #${i + 1}:`));
    if (!isNaN(sueldo)) {
      sueldos.push(sueldo);
    } else {
      alert("Sueldo inválido. Se omitirá.");
    }
  }

  let maxSueldo = Math.max(...sueldos);
  console.log("El sueldo máximo es: $" + maxSueldo);
} else {
  alert("Número inválido.");
}

// Parte 2: Contador especial
console.log("Contador con reemplazo de 3 por E:");
for (let i = 0; i <= 99999; i++) {
  let num = i.toString().padStart(5, '0');
  let convertido = num.replaceAll('3', 'E');
  let separado = convertido.split('').join('-');
  console.log(separado);
}
