"use strict";

/*Funcion que al invocarla, le pregunta al usuario por el numero de repeticiones*/
 function askForLimitNumber() {

    const limit = Number.parseInt(prompt("Ingrese el numero"));
  
    if (limit >= 1 && limit <= 20) {
      console.log("el numero esta dentro del rango");
      return limit;
    } else {
      console.log("el numero esta fuera de rango");
      return null;
    }
  }
  
  /**
   * Almacenamos el numero7
   *
   */
  const limitNumber = askForLimitNumber(); 
  
  for (let i = 1; i <= limitNumber; i++) {
    console.log(`${i} x ${limitNumber} = ${i * 10}`);
  }
  /**
   * Calculamos el factorial de todos los numeros enteros desde 1 a N donde N es igual a limitNumber
   */
  for (let factoryNumber = 1; factoryNumber <= limitNumber; factoryNumber++) {
    let result = 1;
    for (let multiplier = 1; multiplier <= factoryNumber; multiplier++) {
      result = result * multiplier;
    }
    console.log(`El factorial de ${factoryNumber} puede ser ${result}`);
  }
  