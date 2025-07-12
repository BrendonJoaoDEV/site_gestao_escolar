import { calcularMedia } from "./modules/calculo.js";
import { botaoEvento, printTabela } from "./utils/utils.js";
import { printResultado } from "./utils/utils.js";

// Variável para controlar o último ID usado
let ultimoId = 0;

document.addEventListener('DOMContentLoaded', () => {
  botaoEvento('adicionarAluno', () => {
    const media = calcularMedia();
    if (media !== null) {
      // Incrementa ID e cria objeto com dados mínimos
      ultimoId++;
      const aluno = {
        id: ultimoId,
        nome: "Nome Pendente",
        notas: "Notas Pendentes",
        frequencia: "Frequência Pendente",
        media: media,
        total: "Total Pendente",
        sitacao: "Situação Pendente"
      };
      printTabela(aluno);
    }
  });
});
