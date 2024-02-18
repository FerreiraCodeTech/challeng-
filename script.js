function updateOutput(resultado) {
  const output = document.getElementById('output');
  const outputImg = document.getElementById('output-img');
  const outputMessage = document.getElementById('output-message');
  const btnCopiar = document.getElementById('btn-copiar');

  if (output.value != " "){
    output.innerText = resultado;
    if (resultado.trim().length > 0) {
      if (outputImg) outputImg.style.display = 'none';
      if (outputMessage) outputMessage.style.display = 'none';
      if (btnCopiar) btnCopiar.style.display = 'block';
    } else {
      if (outputImg) outputImg.style.display = 'block';
      if (outputMessage) outputMessage.style.display = 'block';
      if (btnCopiar) btnCopiar.style.display = 'none';
    }
  } else {
    console.error("Elemento 'output' não encontrado.");
  }
}

function checkLowerCase() {
  const textArea = document.querySelector('.main__textarea');
  const text = textArea.value.trim();

  const regex = /^[a-z\s]+$/;
  const lowerCase = regex.test(text);

  if (lowerCase) {
    const textoCriptografado = criptografar(text);
    updateOutput(textoCriptografado);
  } else {
    alert("Por favor, digite apenas letras minúsculas e sem acento.");
  }
}

function criptografar(texto) {
  return texto.replace(/e/g, 'enter')
              .replace(/i/g, 'imes')
              .replace(/a/g, 'ai')
              .replace(/o/g, 'ober')
              .replace(/u/g, 'ufat');
}

function descriptografar() {
  const texto = document.querySelector('.main__textarea').value.trim();
  const resultado = texto.replace(/enter/g, 'e')
                         .replace(/imes/g, 'i')
                         .replace(/ai/g, 'a')
                         .replace(/ober/g, 'o')
                         .replace(/ufat/g, 'u');
  updateOutput(resultado);
}

function copiarTexto() {
  const outputText = document.getElementById('output').innerText;
  navigator.clipboard.writeText(outputText)
      .then(() => alert('Texto copiado com sucesso!'))
      .catch(err => console.error('Erro ao copiar texto: ', err));
}