/*
  JERCICIO JS - PROMISE
  Autor: Evgeniy A. Nekrasov
  Fecha: 04/03/22
*/

"use strict";

function userAge(age) {
  const agePromise = new Promise((resolve, reject) =>
    setTimeout(
      () => resolve(Math.round(Math.random() * 100)),
      Math.random() * 1000
    )
  );
  agePromise.then(() => {
    if (age < 18) {
      agePromise.catch((error) => {
        console.error(error);
      });
      setTimeout(() => {
        console.error("Menor de edad", agePromise);
      });
    }
    if (age % 2 === 0 && age > 18) {
      agePromise.then(() => {
        setTimeout(() => {
          console.log("Edad es par", agePromise);
        }, 1000);
      });
    }
    if (age % 2 !== 0 && age > 18) {
      agePromise.then(() => {
        setTimeout(() => {
          console.log("Edad es impar", agePromise);
        }, 2000);
      });
    }
  });
  return age;
}

userAge(27);
