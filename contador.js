// Solicitarle al usuario que ingrese una frase
let frase = prompt("Ingresa una frase:");

// Definiendo las vocales
let vocales = "aeiouAEIOU";
let vocalesEncontradas = [];  // Array/arreglo para almacenar las vocales encontradas
let contadorVocales = 0;  // Contador de vocales

// Recorrer cada letra de la frase
for (let i = 0; i < frase.length; i++) {
    let letra = frase[i];
    if (vocales.includes(letra)) {  // Si la letra es una vocal
        contadorVocales++;
        vocalesEncontradas.push(letra);  // Agregar la vocal al arreglo/array
    }
}

// Mostrar los resultados
console.log("Cantidad de vocales encontradas:", contadorVocales);
console.log("Vocales específicas encontradas:", vocalesEncontradas);
