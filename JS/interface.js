window.onload = (() => {

  setTimeout(pegarTarefas, 1000)
});


function mostrarTabela(tarefas) {
  const emailUsuario = document.getElementById("emailUsuario");
  emailUsuario.textContent = auth.currentUser.email;
  emailUsuario.style.fontSize = "1.3rem";
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = '';

  let quantidadeTarefas = 0;

  if (tarefas.length == 0) {
    const tr = `
            <tr>
              <td colspan="5" class="text-center">Nemhuma Tarefa</td>
            </tr>
            `
    tbody.innerHTML = tr;
    return
  }

  tarefas.forEach(dado => {
    let tarefa = dado.data();

    const numeroDeTarefas = document.createElement('td');
    const numeroDeTarefasTexto = document.createTextNode(`${quantidadeTarefas++}`);
    numeroDeTarefas.appendChild(numeroDeTarefasTexto);

    const tdDescricao = document.createElement('td');
    const textoDescricao = document.createTextNode(tarefa.descricao);
    tdDescricao.appendChild(textoDescricao);

    const tdPrazo = document.createElement('td');
    const data = new Date(tarefa.prazo);
    const diferencaMinutos = data.getTimezoneOffset();
    data.setMinutes(data.getMinutes() + diferencaMinutos);
    const dataFormatada = data.toLocaleDateString();

    const textoPrazo = document.createTextNode(dataFormatada);
    tdPrazo.appendChild(textoPrazo);

    const tdStatus = document.createElement('td');
    const textoStatus = document.createTextNode(tarefa.status);
    tdStatus.appendChild(textoStatus);

    const botaoExcluir = document.createElement('button');
    botaoExcluir.className = "btn btn-danger btn-sm ";
    botaoExcluir.textContent = "Ecluir"
    botaoExcluir.setAttribute('data-id', dado.id);
    botaoExcluir.addEventListener('click', excluirTarefa);

    const tr = document.createElement('tr');
    tr.className = "text-center";
    tr.appendChild(numeroDeTarefas);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdPrazo);
    tr.appendChild(tdStatus);
    tr.appendChild(botaoExcluir);
    tbody.appendChild(tr);
  });
}

function pegarCampos() {
  let inputDescricao = document.getElementById("descricao");
  let inputPrazo = document.getElementById("prazo");
  let prazo = inputPrazo.value;
  console.log(prazo)

  let inputStatus = document.getElementById("status");

  if (!inputDescricao.value) {
    console.log("descrição obrigatoria")
    return
  }

  if (!inputPrazo.value) {
    console.log("prazo obrigatoria")
    return
  }

  if (!inputStatus.value) {
    console.log("status obrigatorio")
    return
  }

  return {
    userId: auth.currentUser.uid,
    descricao: inputDescricao.value,
    prazo: inputPrazo.value,
    status: inputStatus.value
  }
}