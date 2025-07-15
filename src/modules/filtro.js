export function filtrarSituacao(estruturaDados) {
    const situacao = '';

    estruturaDados.forEach(estruturaDados => {
        situacao = (estruturaDados.frequencia >= 75 && estruturaDados.media >= 60) ? 'Aprovado' : 'Reprovado'
    })
    return situacao;
}
