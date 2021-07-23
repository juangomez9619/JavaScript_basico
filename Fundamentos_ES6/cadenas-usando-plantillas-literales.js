/*Plantilla literal
Cadena especial que facilita la creación de 
cadenas más complejas

Permite crear cadenas multilinea e interpolación

$ es un marcador de posición {}
 */
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Cambia solo el código debajo de esta línea
  const failureItems = [];
  // Cambia solo el código encima de esta línea
  for(let i = 0; i< arr.length; i++) 
    failureItems.push(
      `<li class="text-warning">${arr[i]}</li>`
    );
  return failureItems;
}

const failuresList = makeList(result.failure);