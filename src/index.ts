let sueldo: string = document.getElementById("sueldo");

let btn = document.getElementById("btn");
let sueldoaumento: number;

btn.addEventListener("click", () => {
  let sueld: number = Number(sueldo.value);
  if (0 < sueld && sueld <= 15000) {
    sueldoaumento = sueld * 1.2;
    console.log("tiene un aumento del 20%, su sueldo es de "+ sueldoaumento);
  } else if (15000 < sueld && sueld <= 20000) {
    sueldoaumento = sueld * 1.1;
    console.log("tiene un aumento del 10%, su sueldo es de "+ sueldoaumento);
  } else if (20000 < sueld && sueld <= 25000) {
    sueldoaumento = sueld * 1.05;
    console.log("tiene un aumento del 5%, su sueldo es de "+ sueldoaumento);
  } else if (sueld > 25000) {
    sueldoaumento = sueld;
    console.log("no tiene aumento");
  }
});
