// Pedimos el número secreto (puede ser introducido por otro jugador o generado aleatoriamente)
const numeroSecreto = parseInt(prompt("Jugador 1: Ingresa el número secreto (N):"));
let adivinanza;
let intentos = 0;

do {
  adivinanza = parseInt(prompt("Jugador 2: Adivina el número"));
  intentos++;

  if (adivinanza < numeroSecreto) {
    alert("Es mayor 🔼");
  } else if (adivinanza > numeroSecreto) {
    alert("Es menor 🔽");
  } else {
    alert(`¡Correcto! 🎉 Adivinaste el número en ${intentos} intento(s).`);
  }
} while (adivinanza !== numeroSecreto);
