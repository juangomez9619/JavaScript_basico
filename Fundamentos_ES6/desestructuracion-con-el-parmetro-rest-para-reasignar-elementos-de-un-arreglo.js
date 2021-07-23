const source = [1,2,3,4,5,6,7,8,9,10];

// El parámetro rest permite tomar el 'sobrante' de un arreglo
// sólo funciona como la última variable de la lista

function removeFirstTwo(list) {
  const [ , ,...arr] = list; // Cambia esta línea
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr)