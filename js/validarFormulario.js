const datos = {
    nombre : '',
    email : '',
    numero : '',
    asunto : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const numero = document.querySelector('#numero')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')
const enviar = document.getElementById('send')


nombre.addEventListener('input', LeerTexto)
email.addEventListener('input', LeerTexto)
numero.addEventListener('input', LeerTexto)
asunto.addEventListener('input', LeerTexto)
mensaje.addEventListener('input', LeerTexto)

enviar.addEventListener('click', (event) => {
    event.preventDefault();

    // Validar el formulario
    const{ nombre, email, mensaje, asunto, numero} = datos;  // Extraer los valores y crear las variables en un solo paso

    if(nombre === '' || email === '' || mensaje === '' || asunto === '' || numero === ''){
        MostrarAlerta('Todos Los Campos Son Obligatorios', 'error')

        return; // Corta la Ejcucion del Codigo
    }
    formulario.setAttribute('action', 'https://formsubmit.co/da_es_11@outlook.com')
    MostrarAlerta('Enviado Correctamente');
    formulario.submit();
    
})


function LeerTexto(e) {
    console.log(e.target.value); 
    datos[e.target.id] = e.target.value;
}

function MostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 2000);
}