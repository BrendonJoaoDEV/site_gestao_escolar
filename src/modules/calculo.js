import { printResultado } from "../utils/utils.js";

export function calcularMedia(notas) {
  const notasConvertidas = notas.map(n => parseFloat(n));

  if (notasConvertidas.some(n => isNaN(n) || n < 0 )) {
    printResultado('erro', 'Notas inválidas');
    return null;
  }

  const media = notasConvertidas.reduce((soma, n) => soma + n, 0) / notasConvertidas.length;
  return media;
}

export function gerarIdUnico(ultimoId) {
  let novoId = ultimoId + 1;
  return novoId;
}
