let anyo = prompt("Introduzca un año");


if (anyo % 400 === 0){
  console.log("El año es bisiersto "+anyo);
  
}else if (anyo % 4 == 0 ||  anyo & 100 === 0){
  console.log("No es bisiesto "+anyo);
  
}