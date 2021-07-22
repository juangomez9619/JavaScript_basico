/*
const permite crear constantes, se nombran en mayúscula usando _
*/
function printManyTimes(str) {

  // Cambia solo el código debajo de esta línea

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Cambia solo el código encima de esta línea

}
printManyTimes("freeCodeCamp");