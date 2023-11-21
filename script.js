function displayError() {
  if (!document.getElementById("errorInfos")) {
    let subContainer = document.getElementById("sub-container");
    let errorInfos = document.createElement("div");
    errorInfos.id = "errorInfos";
    errorInfos.innerHTML = "Les informations sont erronées";
    errorInfos.classList.add("error");
    subContainer.appendChild(errorInfos);
  }
}

function removeError() {
  let errorElement = document.getElementById("errorInfos");
  if (errorElement) {
    errorElement.remove();
  }
}

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
      displayError();
    } else {
      removeError();
      calculateIMC(weight, size);
    }
    controlUnit();
  });
}
userData();
