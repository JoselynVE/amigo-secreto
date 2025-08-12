// Array para los nombres
let amigos = [];
// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // evitar duplicados
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

// Función para mostrar la lista
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}