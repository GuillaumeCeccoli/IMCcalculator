const query = window.location.search;
const urlParams = new URLSearchParams(query);
const imc = urlParams.get("imc");
const text = document.getElementById("textResult");
text.textContent = "Votre IMC est de :" + imc;

