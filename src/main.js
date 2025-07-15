import { adicionarAluno } from './modules/alunos.js';
import { carregarAlunos } from './utils/utils.js';

document.addEventListener('DOMContentLoaded', () => {
    let bd = new Array;

    const tabela = document.getElementById('tableBody');
    
    const aluno = {id: 1, nome: 'teste', frequencia: 80, notas: [20, 10, 30, 0], media: 15, total: 60, situacao: 'Aprovado'};

    bd = adicionarAluno(bd, aluno);

    carregarAlunos(bd, tabela);
});