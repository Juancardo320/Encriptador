let encryptedText;
let htmlElement;
let htmlElement2;
const encryptRules = {"e":"enter", "i":"imes", "a":"ai", "o":"ober", "u":"ufat"};
const encryptRules2 = {"enter":"e", "imes":"i", "ai":"a", "ober":"o", "ufat":"u"};

function encrypt(){
    encryptedText = document.querySelector('textarea').value;
    encryptedText.toLocaleLowerCase();
    Object.entries(encryptRules).forEach((iteration) => encryptedText = encryptedText.replaceAll(iteration[0],iteration[1]));
    htmlElement = document.getElementById('mensaje-encriptado');
    htmlElement.innerHTML = encryptedText;
    styleChanges();
}

function decrypt(){
    encryptedText = document.querySelector('textarea').value;
    encryptedText.toLocaleLowerCase();
    Object.entries(encryptRules2).forEach((iteration) => encryptedText = encryptedText.replaceAll(iteration[0],iteration[1]));
    htmlElement = document.getElementById('mensaje-encriptado');
    htmlElement.innerHTML = encryptedText;
    styleChanges();
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

