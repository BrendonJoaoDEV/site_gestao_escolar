

export function verificarSituacao (estruturaDados) {
    const frequencia = estruturaDados.frequencia;
    const media = estruturaDados.media;


    if (frequencia >=75 && media >= 60) {
        return 'aprovado';
    } else {
        return 'Reprovado';

    } 

}

