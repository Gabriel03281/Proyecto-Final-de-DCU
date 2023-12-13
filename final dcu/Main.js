
let users = [];

function registerUser() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const photo = document.getElementById("photo").value;

  const user = { id, name, email, phone, photo };
  users.push(user);



  alert("Usuario registrado exitosamente");
}

function searchUser() {
  const searchId = document.getElementById("searchId").value;
  const user = users.find(u => u.id === searchId);

  if (user) {
    document.getElementById("userInfo").innerHTML = `
      <h2>Datos del Usuario</h2>
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Nombre:</strong> ${user.name}</p>
      <p><strong>Correo:</strong> ${user.email}</p>
      <p><strong>Teléfono:</strong> ${user.phone}</p>
      <img src="${user.photo}" alt="Foto del Usuario">
    `;
  } else {
    document.getElementById("userInfo").innerHTML = "<p>Usuario no encontrado</p>";
  }
}
