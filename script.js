document.getElementById('registroForm').addEventListener('submit', function(event){
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const imagen = document.getElementById('imagen').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();

    if(nombre == '' || correo == '' || imagen == '' || contraseña == ''){
        alert('Todos los campos son obligatorios');
        event.preventDefault();
        return;
    }
})

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }
