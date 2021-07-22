//Parametro rest -> número variable de argumentos
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}