function signup(e){

    event.preventDefault();

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    var user = {
        email: email,
        username: username,
        pass: pass
    }

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('usuario registrado');
    result.innerHTML = `Cuenta creada exitosamente! Por favor volver a la pagina de <a href="index.html">inicio</a> e inicie sesion.`;
}