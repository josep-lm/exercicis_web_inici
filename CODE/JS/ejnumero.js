let numero1 = 16;

let numero2 = 34;

let suma = prompt("Escriba una letra por teclado");


if (suma === "s"){
  let sumar = (numero1 + numero2);
  console.log("La suma es "+sumar);
  
}else if (suma === "m"){
  let multipli = (numero1 * numero2);
  console.log("La multiplicacion es "+multipli);
  
}else if (suma !== "s" && suma !== "m"){
  console.log("Error");
}