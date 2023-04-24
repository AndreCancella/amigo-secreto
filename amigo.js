const urlParams = new URLSearchParams(window.location.search);
const numero = urlParams.get('numero');

const conteudo = document.getElementById('conteudo');      

for(let i = 1; i <= numero; i++){

    const label_nome = document.createElement('h3');
    label_nome.className = 'titulo';
    label_nome.htmlFor = 'nome';
    label_nome.innerHTML = 'Nome pessoa ' + i;
    conteudo.appendChild(label_nome);

    const input_nome = document.createElement('input');
    input_nome.type = 'text';
    input_nome.id = 'nome' + i;
    input_nome.name = 'nome';
    input_nome.required = true;
    conteudo.appendChild(input_nome);

    const label = document.createElement('h3');
    label.className = 'titulo';
    label.htmlFor = 'nome';
    label.innerHTML = 'Email pessoa ' + i;
    conteudo.appendChild(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'email' + i;
    input.name = 'email';
    input.required = true;
    conteudo.appendChild(input);
}

const bt = document.createElement('button');
bt.type = 'submit';
bt.id = 'button';
bt.innerText = "Enviar";
bt.click = 'enviar()';
conteudo.appendChild(bt);

bt.addEventListener('click', () => {
    const form = document.querySelector('form');

    const formData = {};

    form.querySelectorAll('input').forEach(input => {
        if (!formData[input.name]) {
            formData[input.name] = [];
        }
        formData[input.name].push(input.value);
    });

    const jsonData = JSON.stringify(formData);

    console.log(jsonData);
});