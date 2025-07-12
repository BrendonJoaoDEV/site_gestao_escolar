import { calcularMedia } from "./modulos/Media.js";
import { botaoEvento, printTabela } from "./utils/utils.js";
import { printResultado } from "./utils/utils.js";

document.addEventListener('DOMContentLoaded', () => {

    // const nota1 = document.getElementById('nota1Bim').value;
    // const nota2 = document.getElementById('nota2Bim').value;
    // const nota3 = document.getElementById('nota3Bim').value;
    // const nota4 = document.getElementById('nota4Bim').value;
    // const notas = [nota1, nota2, nota3, nota4];
    // const notaConvertidas = notas.map((elemento) => {return parseFloat(elemento)})

    const media = calcularMedia()
    console.log(`media dentro do main ${media}`)
    // printResultado();
    printTabela(media);

});