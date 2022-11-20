function loginFunc(e){

    event.preventDefault();

    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(username, password);
    var data = JSON.parse(user);
    console.log(data);
    

    if(user == null) {
        result.innerHTML = 'Usuario incorrecto';
        console.log('Usuario erroneo');
    } else if( username == data.username && pass == data.pass) {
        
        result.innerHTML = 'Datos correctos';
        console.log('Datos correctos');
        window.location.href = 'home.html';
    } else {
        result.innerHTML = 'Contraseña incorrecta';
        console.log('Contraseña erronea');
    }

}