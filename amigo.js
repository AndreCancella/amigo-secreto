const urlParams = new URLSearchParams(window.location.search);
const quantidadeDeParticipantes = urlParams.get("numero");

const conteudo = document.getElementById("conteudo");

for (let i = 1; i <= quantidadeDeParticipantes; i++) {
  const label_nome = document.createElement("h3");
  label_nome.className = "titulo";
  label_nome.htmlFor = "nome";
  label_nome.innerHTML = "Nome pessoa " + i;
  conteudo.appendChild(label_nome);

  const input_nome = document.createElement("input");
  input_nome.type = "text";
  input_nome.id = "nome" + i;
  input_nome.name = "nome";
  input_nome.required = true;
  conteudo.appendChild(input_nome);

  const labelEmail = document.createElement("h3");
  labelEmail.className = "titulo";
  labelEmail.htmlFor = "nome";
  labelEmail.innerHTML = "Email pessoa " + i;
  conteudo.appendChild(labelEmail);

  const inputEmail = document.createElement("input");
  inputEmail.type = "text";
  inputEmail.id = "email" + i;
  inputEmail.name = "email";
  inputEmail.required = true;
  conteudo.appendChild(inputEmail);
}

const bt = document.createElement("button");
bt.type = "submit";
bt.id = "button";
bt.innerText = "Enviar";
conteudo.appendChild(bt);

bt.addEventListener("click", (evt) => {
  evt.preventDefault();

    const data = Array.from(
      document.querySelectorAll('[id^="nome"]')
    ).map((nomeInput, index) => {
      const emailInput = document.getElementById("email" + (index + 1));
      return { nome: nomeInput.value, email: emailInput.value };
    });

    console.log(data);

    const json = JSON.stringify(data);
    const encodedJson = encodeURIComponent(json);
    
    const url = `processar_dados.php?json=${encodedJson}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
});