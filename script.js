document.addEventListener('DOMContentLoaded', function() {
    let botonAvatar = document.querySelector('#botonAvatar');
    botonAvatar.addEventListener('click', function() {
        let imagen = document.querySelector('#imagenAvatar');
        imagen.src = 'https://media.vanityfair.com/photos/5f5245d91e10df7a77868af6/master/w_1920,c_limit/avatar-the-last-airbender.jpg';
        imagen.style.width = '20%';
    });

    let botonOnePunchMan = document.querySelector('#botonOnePunchMan');
    botonOnePunchMan.addEventListener('click', function() {
        let imagen = document.querySelector('#imagenOnePunchMan');
        imagen.src = 'https://i.blogs.es/377057/one-punch-man/1366_2000.jpeg';
        imagen.style.width = '20%';
    });

    let botonMJ = document.querySelector('#botonMJ');
    botonMJ.addEventListener('click', function() {
        let imagen = document.querySelector('#imagenMJ');
        imagen.src = 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/08/12/16918448636886.jpg';
        imagen.style.width = '20%';
    });
});