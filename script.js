/*
Debe solicitar al usuario 3 números por prompt y 
guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, 
el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de 
mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e 
imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.*/

let num1=parseInt(prompt("Ingrese el primer número"));
let num2=parseInt(prompt("Ingrese el segundo número"));
let num3=parseInt(prompt("Ingrese el tercer número"));    

let numMax=Math.max(num1,num2,num3);
let numMin=Math.min(num1,num2,num3);
let numMedio=(num1+num2+num3)-numMax-numMin;

let heading1=document.createElement("resultado");

if (num1===num2 && num1===num3){
    heading1.innerHTML = "Los tres números son iguales";
    console.log("Los tres números son iguales");
} else if (num1===num3){
    heading1.innerHTML = "El primer y tercer número son iguales";
    console.log("El primer y tercer número son iguales");
} else if (num2===num3){
    heading1.innerHTML = "El segundo y tercer número son iguales";
    console.log("El segundo y tercer número son iguales");
} else if (num1===num2 && num1===num3){
    heading1.innerHTML = "El primer y segundo número son iguales";
    console.log("El primer y segundo número son iguales");
} else{
    heading1.innerHTML=`De mayor a menor: ${numMax}, ${numMedio}, ${numMin} <br>
                        De menor a mayor: ${numMin}, ${numMedio}, ${numMax}`;
    console.log(`De mayor a menor: ${numMax}, ${numMedio}, ${numMin}`);
    console.log(`De menor a mayor: ${numMin}, ${numMedio}, ${numMax}`);
}

