function calculateIMC(weight, size) {
  let imc = weight / Math.pow(size / 100, 2);
  imc = imc.toFixed(2);
  localStorage.setItem("imc", imc);
  window.location.href = "resultat.html?imc=" + imc;
}

function controlUnit() {
  let unit = document.getElementById("unit").value;
  if (unit !== "m" && unit !== "cm") {
    return false;
  } else {
    return true;
  }
}

function negatives(weight, size) {
  if (weight < 0 || size < 0) {
    return false;
  } else {
    return true;
  }
}

function userData() {
  const button = document.getElementById("sub");
  button.addEventListener("click", () => {
    let weight = document.getElementById("weight").value;
    let size = document.getElementById("size").value;
    let unit = document.getElementById("unit").value;
    if (unit === "m") {
      size = Number(size) * 100;
    }
    if (weight === "" || size === "") {
      alert("Veuillez remplir tous les champs");
    } else if (controlUnit() === false) {
      alert("Veuillez choisir une unité de mesure valide");
    } else if (negatives(weight, size) === false) {
      alert("Veuillez entrer des valeurs positives pour le poids ou la taille");
    } else {
      calculateIMC(weight, size);
    }
  });
}
userData();

