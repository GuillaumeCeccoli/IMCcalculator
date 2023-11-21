function calculateIMC(weight, size) {
  let imc = weight / Math.pow(size / 100, 2);
  imc = imc.toFixed(2);
  localStorage.setItem("imc", imc);
  window.location.href = "resultat.html?imc=" + imc;
}

function controlUnit() {
  let unit = document.getElementById("unit").value;
  if (unit !== "m" && unit !== "cm") {
    alert("Unité de mesure invalide");
    return false;
  } else {
    return true;
  }
}

function userData() {
  const button = document.getElementById("sub");
  button.addEventListener("click", () => {
    if (!controlUnit()) {
      return;
    }
    let weight = document.getElementById("weight").value;
    let size = document.getElementById("size").value;
    let unit = document.getElementById("unit").value;
    if (unit === "m") {
      size = Number(size) * 100;
    }
    if (weight === "" || size === "") {
      alert("Veuillez entrer des données valides");
    } else {
      calculateIMC(weight, size);
    }
    controlUnit();
  });
}
userData();
