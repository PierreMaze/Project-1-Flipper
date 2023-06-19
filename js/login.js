const buttonInscription = document.querySelector("#btn-inscription");
const btnConnexion = document.querySelector("#btn-connexion");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

buttonInscription.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.assign("./pages/inscription.html");
});

btnConnexion.addEventListener("click", (event) => {
  if (input1.value === "" || input2.value === "") {
    event.preventDefault();
    alert("remplissez vos identifiants");
  } else {
    event.preventDefault();
    window.location.assign("./pages/feed.html");
  }
});
