export function validarNota(nota1Bim, nota2Bim, nota3Bim, nota4Bim) {

  // Campos vazios
  if (nota1Bim === '' || nota2Bim === '' || nota3Bim === '' || nota4Bim === '') {
    alert("Todos os campos devem ser preenchidos.")
    return null;
  }

  // Converter em número
  [nota1Bim, nota2Bim, nota3Bim, nota4Bim] =
    [nota1Bim, nota2Bim, nota3Bim, nota4Bim].map(Number);

  // Números válidos
  if (isNaN(nota1Bim) || isNaN(nota2Bim) || isNaN(nota3Bim) || isNaN(nota4Bim)) {
    alert("Por favor, preencha o campo corretamente.")
    return null;
  }

  // Número negativo
  if (nota1Bim < 0 || nota2Bim < 0 || nota3Bim < 0 || nota4Bim < 0) {
    alert("Nota do aluno não pode ser negativa.")
    return null;
  }

  // Número maior que 25
  if (nota1Bim > 25 || nota2Bim > 25 || nota3Bim > 25 || nota4Bim > 25) {
    alert("Nota do aluno não pode ser maior que 25 pontos.")
    return null;

  }

  return { nota1Bim, nota2Bim, nota3Bim, nota4Bim };
}


export function validarNome(nome) {

  // Letras com acentos, espaços e hífem
  // const regex = /^[a-zÀ-ÿ\s'-]+$/;
  const regex = /^[\p{L} ]+$/u;

  if (!regex.test(nome)) {
    alert('O nome não deve conter números ou caracteres especiais.');
    return null;
  }

  // Dividindo em partes, sem espaço no icicio e final
  const nomePartes = nome.trim().split(/\s+/);

  // Se há no mínino duas palavras
  // Cada com duas letras
  const nomeValido = nomePartes.length >= 2 && nomePartes.every(parte => parte.length >= 2);

  // Mensagem se nome inválido
  if (!nomeValido) {
    alert('Digite o nome completo (nome e sobrenome).')
    return null;
  }
  return nome;
}

export function botaoEvento(idbotao, funcao) {
  const botao = document.getElementById(idbotao);
  if (botao) botao.addEventListener('click', funcao);
}

export function printResultado(id, print) {
  const elemento = document.getElementById(id);
  if (elemento) elemento.innerHTML = print;
}

export function limparTabela(tabela) {
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

export function limparFormulario (campos) {
  campos.forEach((campo) => {
    campo.value = '';
  });
}