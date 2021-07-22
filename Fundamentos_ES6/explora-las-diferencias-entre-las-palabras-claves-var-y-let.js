/*
var admite la sobrescritura de variables

let solo admite una única declaración

"use strict"; captura errores comunes de programación y
acciones "inseguras"
*/ 

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();