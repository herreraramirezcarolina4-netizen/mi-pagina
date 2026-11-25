document.querySelectorAll("[data-evento]").forEach(function (el) {
  el.addEventListener("click", function () {
    if (typeof gtag === "function") {
      gtag("event", el.dataset.evento, {
        ubicacion: el.dataset.ubicacion || "",
        transport_type: "beacon"
      });
    }
  });
});