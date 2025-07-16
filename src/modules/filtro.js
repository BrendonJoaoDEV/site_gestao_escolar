export function filtrarSituacao(estruturaDados, filtro) {
    let situacao = new Array;

    if (filtro === 'filtroReprovado') {
        situacao = estruturaDados.filter((aluno) => {
            return aluno.situacao === 'Reprovado';
        });
    } else if (filtro === 'filtroAprovado') {
        situacao = estruturaDados.filter((aluno) => {
            return aluno.situacao === 'Aprovado';
        });
    }
    
    return situacao;
}
