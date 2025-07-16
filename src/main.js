import { botaoEvento, carregarAlunos } from "./utils/utils.js";
import { acessibilidade } from "./modules/acessibilidade.js";
import { adicionarAluno, alterarAluno, removerAluno } from "./modules/alunos.js";
import { calcularMedia, gerarIdUnico } from "./modules/calculo.js";
import { filtrarSituacao } from "./modules/filtro.js";
import { verificarSituacao } from "./modules/situacao.js";

let estruturaDados = [];

document.addEventListener('DOMContentLoaded', () => {
  const tabela = document.getElementById('tableBody');
  const entradaNome = document.getElementById('nomeAluno');
  const entradaFrequencia = document.getElementById('frequenciaAluno');
  const entradaNota1 = document.getElementById('nota1Bim');
  const entradaNota2 = document.getElementById('nota2Bim');
  const entradaNota3 = document.getElementById('nota3Bim');
  const entradaNota4 = document.getElementById('nota4Bim');

  acessibilidade();

  function atualizarTabela() {
    carregarAlunos(estruturaDados, tabela, (idRemover) => {
      estruturaDados = removerAluno(estruturaDados, idRemover);
      atualizarTabela(); // recarrega com nova estrutura
    });
  }

  botaoEvento('adicionarAluno', () => {
    let idUnico = 0;

    if (estruturaDados.length > 0) {
      let copiaEstruturaDados = estruturaDados.slice();
      let ultimoAluno = copiaEstruturaDados.pop();
      idUnico = ultimoAluno ? ultimoAluno.id : 0;
    }

    idUnico = gerarIdUnico(idUnico);

    let nomeAluno = entradaNome.value;
    let frequenciaAluno = entradaFrequencia.value;
    let arrayNotas = [
      Number(entradaNota1.value),
      Number(entradaNota2.value),
      Number(entradaNota3.value),
      Number(entradaNota4.value)
    ];

    let mediaAluno = calcularMedia(arrayNotas);
    let totalAluno = arrayNotas.reduce((soma, n) => soma + n, 0);
    let situacaoAluno = verificarSituacao(mediaAluno, frequenciaAluno);

    let aluno = {
      id: idUnico,
      nome: nomeAluno,
      frequencia: frequenciaAluno,
      notas: arrayNotas,
      media: mediaAluno,
      total: totalAluno,
      situacao: situacaoAluno
    };

    estruturaDados = adicionarAluno(estruturaDados, aluno);
    atualizarTabela();
  });
});
