document.addEventListener("DOMContentLoaded", () => {
  // Menú en celular
  const boton = document.querySelector(".menu-btn");
  const menu = document.querySelector(".nav-links");
  if (boton && menu) {
    boton.addEventListener("click", () => {
      const abierto = menu.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto);
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => menu.classList.remove("abierto"))
    );
  }

  // Filtros del blog (solo existen en la página principal)
  const chips = document.querySelectorAll(".chip");
  const posts = document.querySelectorAll(".post");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("activo"));
      chip.classList.add("activo");
      const cat = chip.dataset.cat;
      posts.forEach((p) => {
        p.hidden = !(cat === "Todo" || p.dataset.cat === cat);
      });
    });
  });

  // Métricas: cada clic en un botón con data-evento se envía a Google Analytics
  document.querySelectorAll("[data-evento]").forEach((el) => {
    el.addEventListener("click", () => {
      if (typeof gtag === "function") {
        gtag("event", el.dataset.evento, {
          ubicacion: el.dataset.ubicacion || "",
          transport_type: "beacon",
        });
      }
    });
  });
});
