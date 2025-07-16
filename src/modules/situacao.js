export function verificarSituacao (media, frequencia) {
    if (frequencia >=75 && media >= 15) {
        return 'aprovado';
    } else {
        return 'Reprovado';

    }
}
