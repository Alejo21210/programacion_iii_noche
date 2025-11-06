interface UsuarioLogin {
    id: number;
    username: string;
    password: string;
}

const usuarioparaLogin: UsuarioLogin = {
    id: 1,
    username: "usuarioEjemplo",
    password: "contraseñaSegura"
};
function login(usuario: UsuarioLogin): void {
    if (usuario.password === "contraseñaSegura") {
        console.log('usuario autenticado');
    } else {
        console.log('autenticación fallida');
    }
}
login(usuarioparaLogin);