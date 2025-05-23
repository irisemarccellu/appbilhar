const form = document.getElementById("mesaForm");
const lista = document.getElementById("listaMesas");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nomeMesa").value;
  const local = document.getElementById("localizacao").value;
  const valor = document.getElementById("valor").value;

  const item = document.createElement("div");
  item.className = "mesa-item";
  item.innerHTML = `<strong>${nome}</strong> - ${local} - R$ ${valor}`;

  lista.appendChild(item);

  form.reset();
});
