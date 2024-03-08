const inputTexto = document.querySelector("#txt-usuario");
const campoMensaje1 = document.querySelector(".mensaje1");
const campoMensaje2 = document.querySelector(".mensaje2");
const imagenIlustrativa = document.querySelector(".imgMuneco");
const codigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];


function btnEncriptar() {
  const resultadoTextoEncriptado = encriptando(inputTexto.value);
  campoMensaje1.innerText = resultadoTextoEncriptado;
  inputTexto.value = "";
  campoMensaje2.style.display = "none";
  imagenIlustrativa.style.display = "none";
}

function btnDesencriptar() {
  const resultadoTextoDesencriptado = desencriptar(inputTexto.value);
  campoMensaje1.innerText = resultadoTextoDesencriptado;
  inputTexto.value = "";
  campoMensaje2.style.display = "none";
  imagenIlustrativa.style.display = "none";
}


function encriptando(textoUsuario) {
  textoUsuario = textoUsuario.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
    if (textoUsuario.includes(codigo[i][0])) {
      textoUsuario = textoUsuario.replaceAll(codigo[i][0], codigo[i][1]);
    }
  }
  return textoUsuario;
}


function desencriptar(textoCopiado) {
  textoCopiado = textoCopiado.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
    if (textoCopiado.includes(codigo[i][1])) {
      textoCopiado = textoCopiado.replaceAll(codigo[i][1], codigo[i][0]);
    }
  }
  return textoCopiado;
}
