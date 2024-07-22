let textoEncriptado;
let elementoHTML;
let elementoHTML2;
const encryptRules = {"e":"enter", "i":"imes", "a":"ai", "o":"ober", "u":"ufat"};
const encryptRules2 = {"enter":"e", "imes":"i", "ai":"a", "ober":"o", "ufat":"u"};

function encriptar(){

    textoEncriptado = document.querySelector('textarea').value;
    textoEncriptado.toLocaleLowerCase();
    Object.entries(encryptRules).forEach((varIteracion) => textoEncriptado = textoEncriptado.replaceAll(varIteracion[0],varIteracion[1]));
    elementoHTML = document.getElementById('mensaje-encriptado');
    elementoHTML.innerHTML = textoEncriptado;
    styleChanges();
}

function desencriptar(){
    textoEncriptado = document.querySelector('textarea').value;
    textoEncriptado.toLocaleLowerCase();
    Object.entries(encryptRules2).forEach((varIteracion) => textoEncriptado = textoEncriptado.replaceAll(varIteracion[0],varIteracion[1]));
    elementoHTML = document.getElementById('mensaje-encriptado');
    elementoHTML.innerHTML = textoEncriptado;
    styleChanges();
}

function styleChanges(){
    document.getElementById('muñeco').setAttribute('hidden', true);
    document.getElementById('mensaje-no-encontrado').setAttribute('hidden', true);
    document.getElementById('copiar').removeAttribute('hidden');
    elementoHTML2 = document.getElementById('contenedor-nuevo');
    elementoHTML2.style.alignItems = 'flex-start';
    elementoHTML2.style.justifyContent = 'flex-start';
    elementoHTML.style.marginTop = '25px';
    elementoHTML.style.textAlign = 'left';
}

async function copyText(){
    let texto = document.getElementById('mensaje-encriptado').innerHTML;
    try {
        await navigator.clipboard.writeText(texto);
            console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
}

