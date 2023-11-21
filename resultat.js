const query = window.location.search;
const urlParams = new URLSearchParams(query);
const imc = urlParams.get("imc");
const text = document.getElementById("textResult");
text.textContent = "Votre IMC est de : " + imc;

function result() {
  const info = document.getElementById("info");
  if (imc < 18.5) {
    info.textContent += " Vous êtes en insuffisance pondérale";
    info.style.color = "red";
  } else if (imc >= 18.5 && imc < 25) {
    info.textContent += " Vous êtes en corpulence normale";
  } else if (imc >= 25 && imc < 30) {
    info.textContent += " Vous êtes en surpoids";
  } else if (imc >= 30 && imc < 35) {
    info.textContent += " Vous êtes en obésité modérée";
  } else if (imc >= 35 && imc < 40) {
    info.textContent += " Vous êtes en obésité sévère";
    info.style.color = "red";
  } else if (imc >= 40) {
    info.textContent += " Vous êtes en obésité massive";
    info.style.color = "red";
  }
}
result();

const btn = document.getElementById("sub");
btn.addEventListener("click", () => {
  window.location.href = "index.html";
});
