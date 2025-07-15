import { calcularMedia } from "./modules/calculo.js";
import { botaoEvento, printTabela } from "./utils/utils.js";
import { printResultado } from "./utils/utils.js";
import { carregarAlunos } from './utils/utils.js';
import { adicionarAluno, alterarAluno } from './modules/alunos.js';

document.addEventListener('DOMContentLoaded', () => {
  botaoEvento('adicionarAluno', () => {
    const media = calcularMedia();
    if (media !== null) {
      printTabela(media.toFixed(2));
    }
  });
});