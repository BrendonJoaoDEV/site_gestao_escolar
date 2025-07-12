import { botaoEvento, printResultado} from "../utils/utils.js";

export function calcularMedia() {
  botaoEvento('adicionarAluno', () => {
      const nota1 = document.getElementById('nota1Bim').value;
      const nota2 = document.getElementById('nota2Bim').value;
      const nota3 = document.getElementById('nota3Bim').value;
      const nota4 = document.getElementById('nota4Bim').value;
      const notas = [nota1, nota2, nota3, nota4];
      const notaConvertidas = notas.map((elemento) => {return parseFloat(elemento)})
      
      if (notaConvertidas.some(n => isNaN(n) || n < 0 || n > 10)) {
        printResultado('erro', 'Notas inválidas');
        return;
      }
      
      const media = notaConvertidas.reduce((soma, notaConvertidas) => soma + notaConvertidas, 0) / notaConvertidas.length;

      console.log(notas)
      console.log(notaConvertidas)
      console.log(media)
      return media;
    });
}