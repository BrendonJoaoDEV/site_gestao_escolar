import { printResultado } from "../utils/utils.js";

export function calcularMedia(nota1, nota2, nota3, nota4) {
  const notas = [nota1, nota2, nota3, nota4].map(n => parseFloat(n));

  if (notas.some(n => isNaN(n) || n < 0 )) {
    printResultado('erro', 'Notas inválidas');
    return null;
  }

  const media = notas.reduce((soma, n) => soma + n, 0) / notas.length;
  return media;
}
