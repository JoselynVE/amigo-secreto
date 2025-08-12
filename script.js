// elementos del DOM
const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const participantsBox = document.getElementById("participantsBox");
const sortBtn = document.getElementById("sortBtn");
const winnerBox = document.getElementById("winnerBox");

// Lista - participantes
let participants = [];

// Agregar participante
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    alert("Por favor, ingresa un nombre.");
    return;
  }

  // Evitar duplicados
  if (participants.some(p => p.toLowerCase() === name.toLowerCase())) {
    alert("Ese nombre ya está en la lista.");
    return;
  }

  participants.push(name);
  updateParticipantsList();
  nameInput.value = "";
  nameInput.focus();
});

// Actualiza lista de participantes
function updateParticipantsList() {
  participantsBox.innerHTML = "";
  participants.forEach((participant, index) => {
    const div = document.createElement("div");
    div.textContent = participant;

    // Botón - eliminar participante
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "eliminar";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.marginTop = "10px";
    removeBtn.addEventListener("click", () => {
      participants.splice(index, 1);
      updateParticipantsList();
    });

    div.appendChild(removeBtn);
    participantsBox.appendChild(div);
  });
}

// Sorteo
sortBtn.addEventListener("click", () => {
  if (participants.length === 0) {
    alert("No hay participantes para sortear.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * participants.length);
  const winner = participants[randomIndex];

  // Mostrar el ganador 
  winnerBox.textContent = `Tu amigo secreto es: ${winner}`;
});