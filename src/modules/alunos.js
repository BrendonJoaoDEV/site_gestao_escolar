export function adicionarAluno (bancoDados, alunoAdicionar) {
    bancoDados.push(alunoAdicionar);
    return bancoDados
}

export function removerAluno (bancoDados, idAlunoRemover) {
    // Encontra o aluno que deve ser removido pelo seu id
    const alunoRemover = bancoDados.find((aluno) => {
        return aluno.id === idAlunoRemover;
    });

    // Remove o aluno que deve ser removido
    bancoDados.splice(alunoRemover.id-1, 1)

    // Lista os alunos depois do aluno removido
    const alunosDepoisRemovido = bancoDados.filter((aluno) => {
        return aluno.id > idAlunoRemover;
    });

    // Redefine os ids dos alunos depois do aluno removido para q eles continuem em uma contagem
    alunosDepoisRemovido.map((aluno) => {
        return aluno.id = aluno.id -1;
    });

    return bancoDados
}