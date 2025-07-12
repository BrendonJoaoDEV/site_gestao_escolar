import { adicionarAluno } from './modules/alunos.js';

document.addEventListener('DOMContentLoaded', () => {
    const entradaNome = document.getElementById('nomeAluno');
    const entradaNota1 = document.getElementById('nota1Bim');
    const entradaNota2 = document.getElementById('nota2Bim');
    const entradaNota3 = document.getElementById('nota3Bim');
    const entradaNota4 = document.getElementById('nota4Bim')
    const entradaFrequencia = document.getElementById('frequenciaAluno')

    let bd = []

    document.getElementById('adicionarAluno').addEventListener('click', () => {
        let nome = entradaNome.value;
        let nota1 = entradaNota1.value;
        let nota2 = entradaNota2.value;
        let nota3 = entradaNota3.value;
        let nota4 = entradaNota4.value;
        let frequencia = entradaFrequencia.value;

        aluno = {id: 1, nome: nome, notas: [nota1, nota2, nota3, nota4], frequencia: frequencia}

        adicionarAluno(bd, aluno)
    })
})

// Pegar os dados das entradas
// Validar os dados das entradas
// Adicionar os dados ao banco