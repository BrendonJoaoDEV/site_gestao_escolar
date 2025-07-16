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

export function carregarAlunos (bancoDados, tabelaHtml) {
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
            <button type="button" class="apagarDados">apagar</button>
            <button type="button" class="alterarDados">alterar</button>
        </td>
      </tr>`;
    });
  }
}