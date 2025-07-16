export function acessibilidade() {
  //------------TEMAS--------//
  const btnTemas = document.getElementById('temas');

  btnTemas.addEventListener('click', () => {
    document.body.classList.toggle('tema-claro');
    document.body.classList.toggle('tema-escuro');
  });

  //---------AUMENTAR E DIMINUIR FONTE------//
  const btnAumentar = document.getElementById('aumentar-fonte');
  const btnDiminuir = document.getElementById('diminuir-fonte');

  let tamanhoFonte = 16; // valor inicial (px)

  btnAumentar.addEventListener('click', () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
  });

  btnDiminuir.addEventListener('click', () => {
    tamanhoFonte = Math.max(12, tamanhoFonte - 2); // mínimo 12px para não ficar muito pequeno
    document.body.style.fontSize = tamanhoFonte + 'px';
  });
}
