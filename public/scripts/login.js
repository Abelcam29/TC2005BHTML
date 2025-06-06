const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

const login = async () => {
    const credentials = {username: username.value, password: password.value};
    const data = await fetch("http://localhost:5000/login", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(credentials)
    });
    const res = await data.json();
    console.log("Respuesta del backend:", res);

    // Cambia esta condición para que coincida con tu backend
    if (res.message === 'Login successful' && res.user) {
        sessionStorage.setItem("name", res.user.name);
        sessionStorage.setItem("id", res.user.id);
        window.location = "/pages/home.html?id=" + res.user.id;
    } else {
        alert("Usuario o contraseña incorrectos");
    }
};

if (loginForm) {
    loginForm.addEventListener("submit", function(event){
        event.preventDefault();
        login();
    });
}