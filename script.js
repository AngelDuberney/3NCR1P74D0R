const textArea = document.querySelector(".text-initial");
const textResult = document.querySelector(".text-result");
const botonCopiar = document.querySelector(".boton-copiar").addEventListener("click", copy);
const miTextarea = document.getElementById("miTextarea");
const placeholderOriginal = miTextarea.getAttribute("placeholder");

miTextarea.addEventListener("focus", function() {
    miTextarea.setAttribute("placeholder", "");
});

miTextarea.addEventListener("blur", function() {
    if (miTextarea.value === "") {
        miTextarea.setAttribute("placeholder", placeholderOriginal);
    }
});

function botonEncriptar(){
    alert("\u26A0¡Cuidado!\u26A0 Es una encriptación sencilla... No hay mucha seguridad aquí.")
    const textoEncriptado = encriptar (textArea.value)
    textResult.value = textoEncriptado
    textArea.value = "";
    textResult.style.backgroundImage = "none"
}

function encriptar (stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]]; 
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes (matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    
        }
    }
    return stringEncriptado

}

function botonDesencriptar(){
    alert ("¿Seguro que quieres saber qué dice? ¡Ojalá no sea un virus!")
    const textoDesencriptado = desencriptar (textArea.value)
    textResult.value = textoDesencriptado
    textArea.value = "";
}


function desencriptar (stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]]; 
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes (matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])}
    }
    return stringDesencriptado

}

function copy() {
    alert("Mensaje copiado. ¡Cuidado con lo que haces!")
    let copyText = document.querySelector(".text-result");
    copyText.select();
    document.execCommand("copy");
  }
  

  
 
  





