import { carregarAlunos } from './utils/utils.js';
import { adicionarAluno, alterarAluno } from './modules/alunos.js';

document.addEventListener('DOMContentLoaded', () => {
    let bd = new Array;

    const tabela = document.getElementById('tableBody');

    bd = adicionarAluno(bd, {id: 1, nome: 'teste1', frequencia: 80, notas: [20, 10, 30, 0], media: 15, total: 60, situacao: 'Aprovado'});
    bd = adicionarAluno(bd, {id: 2, nome: 'teste2', frequencia: 80, notas: [20, 10, 30, 0], media: 15, total: 60, situacao: 'Aprovado'});
    bd = adicionarAluno(bd, {id: 3, nome: 'teste3', frequencia: 80, notas: [20, 10, 30, 0], media: 15, total: 60, situacao: 'Aprovado'});
    bd = adicionarAluno(bd, {id: 4, nome: 'teste4', frequencia: 80, notas: [20, 10, 30, 0], media: 15, total: 60, situacao: 'Aprovado'});
    bd = adicionarAluno(bd, {id: 5, nome: 'teste5', frequencia: 80, notas: [20, 10, 30, 0], media: 15, total: 60, situacao: 'Aprovado'});

    let novosDadosAluno = {id: 3, nome: 'testeAlterado', frequencia: 80, notas: [20, 10, 30, 0], media: 15, total: 60, situacao: 'Aprovado'};

    bd = alterarAluno(bd, 3, novosDadosAluno);

    carregarAlunos(bd, tabela)
});