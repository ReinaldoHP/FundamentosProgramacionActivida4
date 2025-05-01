let facturacionTotal = 0;
let litrosArticulo1 = 0;
let litrosTotales = 0;
let facturasMayores600 = 0;

alert('Por favor dejite las 5 facturas :')

for (let i = 1; i <= 5; i++) {
  let codigo = parseInt(prompt(`Factura ${i} - Degite el código del artículo:`));
  let litros = parseFloat(prompt(`Factura ${i} - Degite la cantidad vendida en litros:`));
  let precio = parseFloat(prompt(`Factura ${i} - Degite el precio por litro:`));

  if (isNaN(codigo) || isNaN(litros) || isNaN(precio)) {
    alert("Datos inválidos. Intenta de nuevo.");
    i--;
    continue;
  }

  let importe = litros * precio;
  facturacionTotal += importe;
  litrosTotales += litros;

  if (codigo === 1) {
    litrosArticulo1 += litros;
  }

  if (importe > 600) {
    facturasMayores600++;
  }

  console.log(`Factura ${i} → Código: ${codigo}, Litros: ${litros}, Precio: $${precio}, Importe: $${importe.toFixed(2)}`);
}

console.log("==========================================");
console.log("Facturación total: $" + facturacionTotal.toFixed(2));
console.log("Cantidad total de litros vendidos de todos los articulos: " + litrosTotales + " litros");
console.log("Cantidad de facturas con importe mayor a $600: " + facturasMayores600);
