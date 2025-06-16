//CREARE UN ENDPOINT RICHIAMANDO LA RICHIESTA DELLE RANDO MAIL CREATA

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

//CICLO FOR PER 10

for (let i = 0; i < 10; i++) {
  //DENTRO IL CICLO FOR VADO A RICHIAMARE E STAMPARE LA RISPOSTA ALLA MIA RICHIESTA
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
