(() => {
  const d = document, h = d.documentElement, $ = i => d.getElementById(i);
  if (localStorage.tema === "oscuro") h.dataset.tema = "oscuro";
  $("tema").onclick = () => { const o = h.dataset.tema === "oscuro"; if (o) delete h.dataset.tema; else h.dataset.tema = "oscuro"; localStorage.tema = o ? "claro" : "oscuro"; };
  $("burger").onclick = () => d.body.classList.toggle("nav");
  const f = () => $("fecha").textContent = new Date().toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" });
  f(); setInterval(f, 30000);
  window.setUser = (n, rol) => {
    $("usr").innerHTML = n ? `<span class="av">${n[0].toUpperCase()}</span><span><b>${n}</b><small>${rol || "Jugador"}</small></span>` : "";
    $("ses").textContent = n ? "Sesión: " + n : "";
  };
})();
