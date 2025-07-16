export function verificarSituacao (media, frequencia) {
    if (frequencia >=75 && media >= 15) {
        return 'Aprovado';
    } else {
        return 'Reprovado';

    }
}
