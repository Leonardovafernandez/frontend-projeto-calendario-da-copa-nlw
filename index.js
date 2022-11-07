function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/${player1}.svg" alt="Bandeira ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/${player2}.svg" alt="Bandeira ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay += 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

alert("Bem vindo! \n Esse é o calendário da copa, um projeto que eu codei no NLW! \nPrepare sua pipoca e vamos maratonar os jogos.")

document.querySelector("#cards").innerHTML =
    createCard("20/11", "domingo", createGame("Catar", "13:00", "Equador")) + 
    createCard("21/11", "segunda", createGame("Inglaterra", "10:00", "Irã") + createGame("Senegal", "13:00", "Holanda") + createGame("EUA", "16:00", "Gales")) + 
    createCard("22/11", "terça", createGame("Argentina", "07:00", "Arábia Saudita") + createGame("Dinamarca", "10:00", "Tunísia") + createGame("México", "13:00", "Polônia") + createGame("França", "16:00", "Austrália")) +
    createCard("23/11", "quarta", createGame("Marrocos", "07:00", "Croácia") + createGame("Alemanha", "10:00", "Japão") + createGame("Espanha", "13:00", "Costa Rica") + createGame("Bélgica", "16:00", "Canadá")) +
    createCard("24/11", "quinta", createGame("Suíça", "07:00", "Camarões") + createGame("Uruguai", "10:00", "Coreia do Sul") + createGame("Portugal", "13:00", "Gana") + createGame("Brasil", "16:00", "Sérvia")) +
    createCard("25/11", "sexta", createGame("Gales", "07:00", "Irã") + createGame("Catar", "10:00", "Senegal") + createGame("Holanda", "13:00", "Equador") + createGame("Inglaterra", "16:00", "EUA")) +
    createCard("26/11", "sabado", createGame("Tunísia", "07:00", "Austrália") + createGame("Polônia", "10:00", "Arábia Saudita") + createGame("França", "13:00", "Dinamarca") + createGame("Argentina", "16:00", "México")) +
    createCard("27/11", "domingo", createGame("Japão", "07:00", "Costa Rica") + createGame("Bélgica", "10:00", "Marrocos") + createGame("Croácia", "13:00", "Canadá") + createGame("Espanha", "16:00", "Alemanha")) +
    createCard("28/11", "segunda", createGame("Camarões", "07:00", "Sérvia") + createGame("Coreia do Sul", "10:00", "Gana") + createGame("Brasil", "13:00", "Suíça") + createGame("Portugal", "16:00", "Uruguai")) +
    createCard("29/11", "terça", createGame("Holanda", "12:00", "Catar") + createGame("Equador", "12:00", "Senegal") + createGame("Gales", "16:00", "Inglaterra") + createGame("Irã", "16:00", "EUA")) +
    createCard("30/11", "quarta", createGame("Tunísia", "12:00", "França") + createGame("Austrália", "12:00", "Dinamarca") + createGame("Polônia", "16:00", "Argentina") + createGame("Arábia Saudita", "16:00", "México")) +
    createCard("01/12", "quinta", createGame("Croácia", "12:00", "Bélgica") + createGame("Canadá", "12:00", "Marrocos") + createGame("Japão", "16:00", "Espanha") + createGame("Costa Rica", "16:00", "Alemanha")) +
    createCard("02/12", "sexta", createGame("Gana", "12:00", "Uruguai") + createGame("Coreia do Sul", "12:00", "Portugal") + createGame("Sérvia", "16:00", "Suíça") + createGame("Camarões", "16:00", "Brasil"));
