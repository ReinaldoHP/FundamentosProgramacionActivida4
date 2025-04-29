for (let i = 0; i <= 99999; i++) {
    // Convertimos el número a string, rellenándolo con ceros a la izquierda para que siempre tenga 5 dígitos
    let numero = i.toString().padStart(5, '0');
    
    // Reemplazamos los 3 por 'E'
    let numeroConE = numero.replace(/3/g, 'E');
    
    console.log(numeroConE.split('').join('-'));
  }
  