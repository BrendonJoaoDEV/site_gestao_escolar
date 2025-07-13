export function carregarAlunos (bancoDados, tabelaHtml) {
    bancoDados.forEach((aluno) => {
        tabelaHtml.innerHTML += `
        <tr>
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.frequencia}</td>
            <td>${aluno.notas}</td>
            <td>${aluno.media}</td>
            <td>${aluno.total}</td>
            <td>${aluno.situacao}</td>
        </tr>`
    });
}