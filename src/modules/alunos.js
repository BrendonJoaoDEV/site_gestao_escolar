export function gerarIdUnico(ultimoId) {
  ultimoId++;
  return ultimoId;
}

export function adicionarAluno (estruturaDados, alunoAdicionar) {
    estruturaDados.push(alunoAdicionar);
    return estruturaDados;
}

export function alterarAluno (estruturaDados, idAlunoAlterar, novosDadosAluno) {
    // Encontra o aluno que deve ser alterado
    const alunoAlterar = estruturaDados.find((aluno) => {
        return aluno.id === idAlunoAlterar;
    });

    // Remove os dados anteriores do aluno e substitui pelos novos dados
    estruturaDados.splice(alunoAlterar.id-1, 1, novosDadosAluno);

    return estruturaDados;
}

export function removerAluno (estruturaDados, idAlunoRemover) {
    // Encontra o aluno que deve ser removido pelo seu id
    const alunoRemover = estruturaDados.find((aluno) => {
        return aluno.id === idAlunoRemover;
    });

    // Remove o aluno que deve ser removido
    estruturaDados.splice(alunoRemover.id-1, 1)

    // Lista os alunos depois do aluno removido
    const alunosDepoisRemovido = estruturaDados.filter((aluno) => {
        return aluno.id > idAlunoRemover;
    });

    // Redefine os ids dos alunos depois do aluno removido para q eles continuem em uma contagem
    alunosDepoisRemovido.map((aluno) => {
        return aluno.id = aluno.id -1;
    });

    return estruturaDados;
}
