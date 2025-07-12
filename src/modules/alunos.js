// modules/contadorId.js
let ultimoId = 0;

export function gerarIdUnico() {
  ultimoId++;
  return ultimoId;
}
