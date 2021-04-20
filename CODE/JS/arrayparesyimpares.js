let numeros = [1,2,3,55,44,6];

let suma = 0;

let promedio = 0;

let valorAlto = 0;

let valorBajo = numeros[0];

let pares = [];

let impares = [];


/*Suma array*/
for(let i of numeros) suma+=i;
console.log("La suma dels elements es "+suma);
 
/*promig Array*/

let avg = suma / numeros.length;
console.log("El promig es "+avg);

/*Valor mes alt*/
numeros.sort();
console.log("Estan ordenats "+numeros);

for ( let i of numeros ) {
  if (valorAlto< i)
    valorAlto = i;
}
console.log("El valor mes alt "+valorAlto);

/*Valor mes baix*/

for(i=1;i<numeros.length;i++){  
    if(numeros[i]<valorBajo){  
       (valorBajo=numeros[i])  
    }
}
console.log("El valor mes baix "+valorBajo);


/*Par Impar*/

for(let i= 0;i<numeros.length;i++){
    if(i % 2 ==0){
        impares.push(numeros[i]);
    }
    else{
        pares.push(numeros[i]);
    }
}
console.log("Los numeros impares son " + impares);
console.log("Los numeros pares son " + pares);
