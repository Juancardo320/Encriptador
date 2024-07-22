let htmlElement;
let htmlElement2;
const encryptRules = {"e":"enter", "i":"imes", "a":"ai", "o":"ober", "u":"ufat"};
const encryptRules2 = {"enter":"e", "imes":"i", "ai":"a", "ober":"o", "ufat":"u"};
const expre = /^[a-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s\u2190\u2191\u2192\u2193]*$/;
let encryptedText = document.querySelector('textarea');

encryptedText.addEventListener('input', (event) => {
    const value = event.target.value;
    if (!expre.test(value)) {
      event.target.value = value.slice(0, -1); 
    }
});

function encrypt(){
    encryptedText = document.querySelector('textarea').value;
    encryptedText.toLocaleLowerCase();
    Object.entries(encryptRules).forEach((iteration) => encryptedText = encryptedText.replaceAll(iteration[0],iteration[1]));
    htmlElement = document.getElementById('mensaje-encriptado');
    htmlElement.innerHTML = encryptedText;
    styleChanges();
    return
}

function decrypt(){
    encryptedText = document.querySelector('textarea').value;
    encryptedText.toLocaleLowerCase();
    Object.entries(encryptRules2).forEach((iteration) => encryptedText = encryptedText.replaceAll(iteration[0],iteration[1]));
    htmlElement = document.getElementById('mensaje-encriptado');
    htmlElement.innerHTML = encryptedText;
    styleChanges();
    return
}

function styleChanges(){
    document.getElementById('muñeco').setAttribute('hidden', true);
    document.getElementById('mensaje-no-encontrado').setAttribute('hidden', true);
    document.getElementById('copiar').removeAttribute('hidden');
    htmlElement2 = document.getElementById('contenedor-nuevo');
    htmlElement2.style.alignItems = 'flex-start';
    htmlElement2.style.justifyContent = 'flex-start';
    htmlElement.style.marginTop = '25px';
    htmlElement.style.textAlign = 'left';
    return
}

async function copyText(){
    let texto = document.getElementById('mensaje-encriptado').innerHTML;
    try {
        await navigator.clipboard.writeText(texto);
            console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
    return
}

