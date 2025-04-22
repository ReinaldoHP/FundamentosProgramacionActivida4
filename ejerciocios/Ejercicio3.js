let producto = 1;
let contador = 0;
let numero = 1;

while (contador < 10) {
  producto *= numero;
  numero += 2; // Avanza al siguiente número impar
  contador++;
}

console.log("El producto de los 10 primeros números impares es: " + producto);
