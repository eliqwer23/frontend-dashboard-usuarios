
let users = [
    { name: "Esmerlin Rosario", email: "rosario@gmail.com", role: "Jefe de desarrollo" },
    { name: "Elí Molina", email: "eli27@gmail.com", role: "Desarrollador Fronend" },
    { name: "Lucía Gómez", email: "lucia@gmail.com", role: "Editor" },
    { name: "Pedro Martínez", email: "pedro@gmail.com", role: "Usuario" },
    { name: "Ana Torres", email: "ana@gmail.com", role: "Cliente" },
    { name: "Luis Paredes", email: "luis@gmail.com", role: "Usuario" }
];

const userTable = document.getElementById("userTable");
const searchInput = document.getElementById("searchInput");
const addUserBtn = document.querySelector(".add-user");

function renderTable(data) {
    userTable.innerHTML = "";
    data.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="editUser(${index})" class="action-btn edit">Editar</button>
                <button onclick="deleteUser(${index})" class="action-btn delete">Eliminar</button>
            </td>
        `;
        userTable.appendChild(row);
    });
}

window.editUser = function(index) {
    const user = users[index];
    const newName = prompt("Editar nombre:", user.name);
    const newEmail = prompt("Editar email:", user.email);
    const newRole = prompt("Editar rol:", user.role);

    if (newName && newEmail && newRole) {
        users[index] = { name: newName, email: newEmail, role: newRole };
        renderTable(users);
    }
};

window.deleteUser = function(index) {
    const confirmDelete = confirm("¿Estás seguro de eliminar este usuario?");
    if (confirmDelete) {
        users.splice(index, 1);
        renderTable(users);
    }
};

searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
    renderTable(filteredUsers);
});

addUserBtn.addEventListener("click", function () {
    const name = prompt("Ingrese el nombre del nuevo usuario:");
    const email = prompt("Ingrese el correo del nuevo usuario:");
    const role = prompt("Ingrese el rol del nuevo usuario:");

    if (name && email && role) {
        users.push({ name, email, role });
        renderTable(users);
    } else {
        alert("Todos los campos son obligatorios.");
    }
});

renderTable(users);
