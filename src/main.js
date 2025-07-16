import { botaoEvento, carregarAlunos} from "./utils/utils.js";
import { acessibilidade } from "./modules/acessibilidade.js"
import { gerarIdUnico, adicionarAluno, alterarAluno, removerAluno } from "./modules/alunos.js";
import { calcularMedia } from "./modules/calculo.js";
import { filtrarSituacao } from "./modules/filtro.js";
import { verificarSituacao } from "./modules/situacao.js";

// Variável para controlar o último ID usado
let ultimoId = 0;

document.addEventListener('DOMContentLoaded', () => {
  const tabela = document.getElementById('tableBody');
  const entradaNome = document.getElementById('nomeAluno');
  const entradaFrequencia = document.getElementById('frequenciaAluno');
  const entradaNota1 = document.getElementById('nota1Bim');
  const entradaNota2 = document.getElementById('nota2Bim');
  const entradaNota3 = document.getElementById('nota3Bim');
  const entradaNota4 = document.getElementById('nota4Bim');
  let estruturaDados = new Array;

  acessibilidade();
  botaoEvento('adicionarAluno', () => {
    let idUnico = 0;

    idUnico = gerarIdUnico(idUnico);

    let nomeAluno = entradaNome.value;

    let frequenciaAluno = entradaFrequencia.value;

    let arrayNotas = [entradaNota1.value, entradaNota2.value, entradaNota3.value, entradaNota4.value];
    
    let mediaAluno = calcularMedia(arrayNotas);

    let totalAluno = arrayNotas.reduce((soma, n) => soma + n);

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
    
    carregarAlunos(estruturaDados, tabela);
  });
});