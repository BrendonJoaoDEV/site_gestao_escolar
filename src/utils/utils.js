export function botaoEvento(idbotao, funcao) {
    const botao = document.getElementById(idbotao);
    botao.addEventListener('click',funcao);
}

export function printResultado(id,print){
    const resultado = document.getElementById(id);
    if (resultado) resultado.innerHTML = print;
}

export function printTabela(media) {
    console.log(`media dentro do utils ${media}`)
    botaoEvento('adicionarAluno', () => {
        printResultado('tableBody', `
        <tbody>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>${media}</th>
                <th></th>
                <th></th>
                <th>
                    <button type="button" id="apagarDados">apagar</button>
                    <button type="button" id="alterarDados">alterar</button>
                </th>
            </tr>
        </tbody>`);
    });
};