import { botaoEvento, carregarAlunos} from "./utils/utils.js";
import { adicionarAluno, alterarAluno, removerAluno } from "./modules/alunos.js";
import { calcularMedia } from "./modules/calculo.js";

document.addEventListener('DOMContentLoaded', () => {
  const tabela = document.getElementById('tableBody');
  const entradaNome = document.getElementById('nomeAluno');
  const entradaFrequencia = document.getElementById('frequenciaAluno');
  const entradaNota1 = document.getElementById('nota1Bim');
  const entradaNota2 = document.getElementById('nota2Bim');
  const entradaNota3 = document.getElementById('nota3Bim');
  const entradaNota4 = document.getElementById('nota4Bim');
  let estruturaDados = new Array;

  botaoEvento('adicionarAluno', () => {
    let arrayNotas = [entradaNota1.value, entradaNota2.value, entradaNota3.value, entradaNota4.value];
    
    let aluno = {
      // id: ,
      nome: entradaNome.value,
      frequencia: entradaFrequencia.value,
      notas: arrayNotas,
      media: calcularMedia(arrayNotas),
      total: arrayNotas.reduce((soma, n) => soma + n)
      // situacao:
    };

    estruturaDados = adicionarAluno(estruturaDados, aluno);

    carregarAlunos(estruturaDados, tabela);
  });
});