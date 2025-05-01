let positivos = 0;
let sumaPositivos = 0;

let negativos = 0;
let sumaNegativos = 0;

let ceros = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseFloat(prompt(`Introduce el número ${i} de 10:`));

  if (numero > 0) {
    sumaPositivos += numero;
    positivos++;
  } else if (numero < 0) {
    sumaNegativos += numero;
    negativos++;
  } else {
    ceros++;
  }
}

let mediaPositivos = positivos > 0 ? (sumaPositivos / positivos).toFixed(2) : 0;
let mediaNegativos = negativos > 0 ? (sumaNegativos / negativos).toFixed(2) : 0;

alert(`Resultados:
- Media de positivos: ${mediaPositivos}
- Media de negativos: ${mediaNegativos}
- Cantidad de ceros: ${ceros}`);
