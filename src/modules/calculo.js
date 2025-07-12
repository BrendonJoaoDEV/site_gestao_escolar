import { printResultado } from "../utils/utils.js";

export function calcularMedia() {
  const nota1 = document.getElementById('nota1Bim').value;
  const nota2 = document.getElementById('nota2Bim').value;
  const nota3 = document.getElementById('nota3Bim').value;
  const nota4 = document.getElementById('nota4Bim').value;
  const notas = [nota1, nota2, nota3, nota4].map(n => parseFloat(n));

  if (notas.some(n => isNaN(n) || n < 0 || n > 10)) {
    printResultado('erro', 'Notas inválidas');
    return null;
  }

  const media = notas.reduce((soma, n) => soma + n, 0) / notas.length;
  return media;
}
