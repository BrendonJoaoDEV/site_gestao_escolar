export function botaoEvento(idbotao, funcao) {
  const botao = document.getElementById(idbotao);
  if (botao) botao.addEventListener('click', funcao);
}

export function printResultado(id, print) {
  const elemento = document.getElementById(id);
  if (elemento) elemento.innerHTML = print;
}

export function limparTabela (tabela) {
  tabela.innerHTML = '';
}

export function carregarAlunos(bancoDados, tabelaHtml, aoRemover) {
  if (tabelaHtml) {
    limparTabela(tabelaHtml);
    bancoDados.forEach((aluno) => {
      tabelaHtml.innerHTML += `
        <tr>
          <td>${aluno.id}</td>
          <td>${aluno.nome}</td>
          <td>${aluno.frequencia}</td>
          <td>${aluno.notas}</td>
          <td>${aluno.media}</td>
          <td>${aluno.total}</td>
          <td>${aluno.situacao}</td>
          <td>
              <button type="button" class="apagarDados" data-id="${aluno.id}">apagar</button>
              <button type="button" class="alterarDados" data-id="${aluno.id}">alterar</button>
          </td>
        </tr>`;
    });

    // Adiciona eventos de apagar com confirmação
    if (typeof aoRemover === 'function') {
      document.querySelectorAll('.apagarDados').forEach(botao => {
        botao.addEventListener('click', (event) => {
          const id = Number(event.target.getAttribute('data-id'));

          const confirmar = confirm("Tem certeza que deseja apagar este aluno?");
          if (confirmar) {
            aoRemover(id);
          }
        });
      });
    }
  }
}
