let taCurtido = false;

function salvarComentarios() {
    const comentarios = [];
    document.querySelectorAll('.comentario').forEach(comentario => {
        const autor = comentario.querySelector('span').textContent;
        const texto = comentario.querySelector('p').textContent;
        comentarios.push({ autor, texto });
    });
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}

function carregarComentarios() {
    const comentariosSalvos = localStorage.getItem('comentarios');
    if (comentariosSalvos) {
        const comentarios = JSON.parse(comentariosSalvos);
        document.querySelector(".comentarios").innerHTML = '';
        comentarios.forEach(comentario => {
            document.querySelector(".comentarios").innerHTML += `
                <div class="comentario">
                    <span>${comentario.autor}</span>
                    <p>${comentario.texto}</p>
                </div>
            `;
        });
    }
}

window.addEventListener('load', carregarComentarios);

document.querySelector(".like").addEventListener("click", function () {
  if (taCurtido == false) {
    taCurtido = true;
    document.querySelector(".like").src = "icones/coracao_red.png";
  } else {
    taCurtido = false;
    document.querySelector(".like").src = "icones/coracao.png";
  }
});

document.querySelector("#btnComentar").addEventListener("click", function () {
  const comentarioTexto = document.querySelector("#txtComentario").value;
  if (comentarioTexto.trim() !== "") {
    document.querySelector(".comentarios").innerHTML += `
        <div class="comentario">
            <span>Bruno Pereira</span>
            <p>${comentarioTexto}</p>
        </div>
        `;
    document.querySelector("#txtComentario").value = "";
    salvarComentarios();
  }
});

document.querySelector(".comentar").addEventListener("click", function () {
  document.querySelector(".formulario").style.visibility = "visible";
});

document.querySelector(".foto").addEventListener("dblclick", function () {
  document.querySelector(".like").src = "icones/coracao_red.png";
  taCurtido = true;
});