function calculIMC() {
  let weight = document.getElementById("weight").value;
  let size = document.getElementById("size").value;
  let imc = weight / Math.pow(size, 2);
}
