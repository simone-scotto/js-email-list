//SELEZIONA IL NODO DELLA DOM

const ulEl = document.querySelector(".list-group");
ulEl.innerHTML = "";

const generatemailBtn = document.getElementById("generate_emailbtn");

//CREARE UN ENDPOINT RICHIAMANDO LA RICHIESTA DELLE RANDO MAIL CREATA

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

//CICLO FOR PER 10

generatemailBtn.addEventListener("click", generatenewMail);

function generatenewMail() {
  ulEl.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    //DENTRO IL CICLO FOR VADO A RICHIAMARE E STAMPARE LA RISPOSTA ALLA MIA RICHIESTA
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const eMail = data.response;

        console.log(eMail);

        const emailMarkup = generateList(eMail);

        console.log(emailMarkup);

        ulEl.insertAdjacentHTML("beforeend", emailMarkup);
      });
  }
}

/* for (let i = 0; i < 10; i++) {
  //DENTRO IL CICLO FOR VADO A RICHIAMARE E STAMPARE LA RISPOSTA ALLA MIA RICHIESTA
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const eMail = data.response;

      console.log(eMail);

      const emailMarkup = generateList(eMail);

      console.log(emailMarkup);

      ulEl.insertAdjacentHTML(`beforeend`, emailMarkup);
    });
}
 */
//FUNZIONE PER GENERARE IL MARK UP

function generateList(eMail) {
  const emaillistMarkup = ` <li class="list-group-item">${eMail}</li>`;

  return emaillistMarkup;
}

//generatemailBtn.addEventListener("click" {

/* function generateMarkup() {
  for (let i = 0; i < 10; i++) {
    //DENTRO IL CICLO FOR VADO A RICHIAMARE E STAMPARE LA RISPOSTA ALLA MIA RICHIESTA
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const eMail = data.response;

        console.log(eMail);

        const emailMarkup = generateList(eMail);

        console.log(emailMarkup);

        ulEl.insertAdjacentHTML(`beforeend`, emailMarkup);
      });
  }
}
 */
