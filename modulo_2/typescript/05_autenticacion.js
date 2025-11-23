var usuarioparaLogin = {
    id: 1,
    username: "usuarioEjemplo",
    password: "contraseñaSegura"
};
function login(usuario) {
    if (usuario.password === "contraseñaSegura") {
        console.log('usuario autenticado');
    }
    else {
        console.log('autenticación fallida');
    }
}
login(usuarioparaLogin);
