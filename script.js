function userData() {
  const button = document.getElementById("sub");
  button.addEventListener("click", () => {
    let weight = document.getElementById("weight").value;
    let size = document.getElementById("size").value;
    if (weight === "" || size === "") {
      if (!document.getElementById("errorInfos")) {
        // Vérifie si le message d'erreur existe déjà
        let subContainer = document.getElementById("sub-container");
        let errorInfos = document.createElement("div");
        errorInfos.id = "errorInfos"; // Ajoute un identifiant à l'élément d'erreur
        errorInfos.innerHTML = "Les informations sont erronées";
        errorInfos.classList.add("error"); // Ajoute une classe à l'élément d'erreur
        subContainer.appendChild(errorInfos);
      }
    } else {
      // Si l'élément d'erreur existe, le supprimer avant de calculer l'IMC
      let errorElement = document.getElementById("errorInfos");
      if (errorElement) {
        errorElement.remove();
      }

      let imc = weight / Math.pow(size / 100, 2);
      imc = imc.toFixed(2);
      localStorage.setItem("imc", imc);
      window.location.href = "resultat.html?imc=" + imc;
    }
  });
}
userData();
