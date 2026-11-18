// Inventario inicial de ejemplo
let productos = [
  { nombre: "Teclado mecánico", cantidad: 15 },
  { nombre: "Mouse inalámbrico", cantidad: 32 },
  { nombre: "Monitor 24\"", cantidad: 8 },
];

const tabla = document.getElementById("tabla-productos");
const form = document.getElementById("form-producto");

const UMBRAL_STOCK_BAJO = 10;

function actualizarResumen() {
  document.getElementById("stat-total").textContent = productos.length;
  document.getElementById("stat-unidades").textContent =
    productos.reduce((suma, p) => suma + p.cantidad, 0);
  document.getElementById("stat-bajo").textContent =
    productos.filter((p) => p.cantidad < UMBRAL_STOCK_BAJO).length;
}

function render() {
  tabla.innerHTML = "";
  productos.forEach((p, i) => {
    const fila = document.createElement("tr");
    if (p.cantidad < UMBRAL_STOCK_BAJO) fila.classList.add("bajo");
    fila.innerHTML = `
      <td>${p.nombre}</td>
      <td>${p.cantidad}</td>
      <td><button class="eliminar" data-index="${i}">Eliminar</button></td>
    `;
    tabla.appendChild(fila);
  });
  actualizarResumen();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const cantidad = parseInt(document.getElementById("cantidad").value, 10);
  if (!nombre || isNaN(cantidad)) return;
  productos.push({ nombre, cantidad });
  form.reset();
  render();
});

tabla.addEventListener("click", (e) => {
  if (e.target.matches("button.eliminar")) {
    productos.splice(Number(e.target.dataset.index), 1);
    render();
  }
});

render();
