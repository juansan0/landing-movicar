import "./style.css";

/* ====================================================================
   DATOS DEL TALLER
   Todo lo que esté en null sale en pantalla como un cartel "A COMPLETAR".
   Cuando el taller los pase, se cargan acá y listo: no hay que tocar el
   HTML. La lista completa de lo que falta está al final del archivo.
==================================================================== */

const TALLER = "Taller Mecánico Movicar";
const CIUDAD = "Neuquén capital";

/* Lo que va en el logo del header: el nombre corto y el rubro abajo. */
const MARCA = "Movicar";
const RUBRO = "Mecánica integral";

/* Página de muestra. Poner en false cuando sea el sitio real del taller. */
const DEMO = true;

/* Un solo número de WhatsApp para toda la página.
   Es el que el taller publica en el bio de su Instagram y en su Facebook
   para pedir turno: 2994123791. NO es el fijo que figura en la ficha de
   Google (632-6744): ese también tiene WhatsApp, pero no es el que ellos
   mismos dan para contactarlos. VERIFICAR con el taller cuál prefieren. */
const WHATSAPP = "5492994123791";
const WHATSAPP_TEXTO =
  "Hola! Quiero pedir un turno para llevar el auto. ¿Qué día tienen lugar?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_TEXTO)}`;

const DIRECCION = "San Martín 2109";
const TELEFONO = "0299 632-6744";
const HORARIOS = null; // A COMPLETAR: las fuentes no coinciden, ver notas al final
const GOOGLE_PUNTAJE = "4,6";
const GOOGLE_RESENAS = 283;

const INSTAGRAM = "https://www.instagram.com/tallerintegralmovicar";

/* Reseñas reales de Google, copiadas tal cual, con el nombre de quien las
   escribió y la cantidad de estrellas que puso. Las estrellas están
   verificadas una por una en la ficha, no asumidas. Nunca inventar una
   reseña ni redondear una estrella para arriba. */
const RESENAS = [
  {
    texto:
      "Excelente atención. Siempre que hago el service, si le encuentran algo más, me informan rápidamente con un presupuesto para tomar la decisión de hacer la reparación y dejarlo 10 puntos.",
    autor: "Jesus Santillan",
    estrellas: 5,
  },
  {
    texto:
      "Excelentes 🫶 muy conformes con el trabajo de distribución con cambio de bomba de agua y corrección de frenos, impecable 🙌 muy amables y atención muy cálida y agradable y excelente ubicación! Lo recomiendo…",
    autor: "Yasmin Estéfano",
    estrellas: 5,
  },
  {
    texto:
      "Execelente servicio mecánico. Trabajo profesional. Sus dueños Sergio y Alejandra unos genios la atención. Los tiempos fueron rápidos de entrega dejando mi auto en excelente estado. 👏🏻👏🏻",
    autor: "Federico Robles",
    estrellas: 5,
  },
];

const MAPS_URL = "https://maps.google.com/?cid=4349668843165992409";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=San+Mart%C3%ADn+2109,+Neuqu%C3%A9n&hl=es&z=17&output=embed";

/* Si el dato está, se muestra. Si no, queda el cartel. */
const dato = (valor, pedido) =>
  valor ? String(valor) : `<span class="ph">${pedido}</span>`;

/* ==================================================================== */

const iconoWhatsapp = `
  <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.173.001 6.154 1.24 8.396 3.486 2.241 2.247 3.477 5.23 3.474 8.403-.005 6.597-5.343 11.944-11.897 11.944-2.005-.001-3.974-.507-5.713-1.47L0 24zm6.59-4.846c1.656.983 3.283 1.493 4.79 1.494 5.332 0 9.68-4.295 9.684-9.574.002-2.557-.994-4.961-2.808-6.779-1.813-1.818-4.225-2.819-6.78-2.822-5.34 0-9.69 4.296-9.695 9.575-.002 1.848.5 3.654 1.455 5.252l-.994 3.63 3.734-.964z"/>
  </svg>`;

/* Cuatro iconos dibujados, uno por especialidad, mismo trazo y mismo peso.
   Primeros cuatro para un taller de mecánica: diagnóstico, frenos,
   suspensión y aceite. Probados a 96, 40 y 24px antes de usarlos. */
const svg = (contenido) => `
  <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${contenido}
  </svg>`;

const ESPECIALIDADES = [
  {
    titulo: "Diagnóstico",
    icono: svg(`
      <circle cx="12" cy="12" r="7.6"/>
      <path d="M13.4 6.4 9 13h3.6l-1 4.6 5-6.8h-3.7z"/>`),
    texto:
      "Revisamos el auto antes de tocar nada y te pasamos el presupuesto. Si aparece algo más de lo que trajiste, te avisamos para que decidas vos si se hace.",
  },
  {
    titulo: "Frenos",
    icono: svg(`
      <circle cx="12" cy="12" r="8"/>
      <circle cx="12" cy="12" r="2.4"/>
      <path d="M12 5.5v2.6M12 15.9v2.6M5.5 12h2.6M15.9 12h2.6"/>`),
    texto:
      "Pastillas, discos y el ajuste general del sistema. Service y reparación de frenos para que el auto frene parejo de los dos lados.",
  },
  {
    titulo: "Suspensión y dirección",
    icono: svg(`
      <path d="M12 2.6v2.6"/>
      <rect x="8.3" y="5.2" width="7.4" height="1.6" rx="0.3"/>
      <path d="M9.2 6.8c0 1 5.6 1 5.6 2s-5.6 1-5.6 2 5.6 1 5.6 2-5.6 1-5.6 2"/>
      <rect x="8.3" y="14.8" width="7.4" height="1.6" rx="0.3"/>
      <path d="M12 16.4v2.8"/>`),
    texto:
      "Amortiguadores, bujes y la alineación de la dirección, para que el auto no tire para ningún lado y no coma la goma de un solo canto.",
  },
  {
    titulo: "Service y cambio de aceite",
    icono: svg(`
      <path d="M12 3.4c-2.9 3.7-4.7 6.9-4.7 9.5a4.7 4.7 0 0 0 9.4 0c0-2.6-1.8-5.8-4.7-9.5z"/>
      <path d="M9.2 14.3a2.9 2.9 0 0 0 2.8 2.4"/>`),
    texto:
      "Cambio de aceite y filtros, correa de distribución y la revisión que corresponde según los kilómetros, para no llegar tarde a un problema.",
  },
];

/* Cinco estrellas, las que puso la persona en lleno y el resto en vacío. */
const estrellas = (n) => `
  <div class="flex gap-0.5" role="img" aria-label="${n} de 5 estrellas">
    ${Array.from(
      { length: 5 },
      (_, i) => `
      <svg class="w-4 h-4 ${i < n ? "text-accent" : "text-line"}" viewBox="0 0 20 20"
           fill="currentColor" aria-hidden="true">
        <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8z"/>
      </svg>`
    ).join("")}
  </div>`;

const botonWhatsapp = (id, clases, etiqueta) => `
  <a ${id ? `id="${id}"` : ""} href="${WHATSAPP_URL}" target="_blank" rel="noopener"
     class="${clases}">${iconoWhatsapp}<span>${etiqueta}</span></a>`;

document.querySelector("#app").innerHTML = /* html */ `
  ${
    DEMO
      ? `<!-- ================= CARTEL DE DEMO ================= -->
  <div class="fixed top-0 inset-x-0 z-[60] h-9 bg-accent text-white
              flex items-center justify-center px-4 text-center">
    <p class="text-[11px] sm:text-xs font-medium leading-tight">
      Página de muestra para ${TALLER}. Todavía no es su sitio oficial.
    </p>
  </div>`
      : ""
  }

  <!-- ================= HEADER ================= -->
  <header class="fixed ${DEMO ? "top-9" : "top-0"} inset-x-0 z-50 h-16 bg-white/85 backdrop-blur-md border-b border-line">
    <div class="mx-auto max-w-6xl h-full px-4 sm:px-6 flex items-center gap-2">

      <a href="#inicio" class="mr-auto min-w-0 flex flex-col leading-none py-2">
        <span class="display text-[17px] font-bold text-ink">${MARCA}</span>
        <span class="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-3 mt-1">
          ${RUBRO}
        </span>
      </a>

      <!-- Menú mobile: checkbox + peer-checked, sin JS -->
      <input type="checkbox" id="menu-toggle" class="peer sr-only"
             aria-label="Abrir y cerrar el menú" />

      <nav id="menu-principal"
           class="hidden peer-checked:block md:block
                  absolute md:static top-16 left-0 w-full md:w-auto
                  bg-white md:bg-transparent border-b md:border-0 border-line
                  shadow-[0_14px_28px_-20px_rgba(18,24,28,0.5)] md:shadow-none
                  px-4 py-2 md:p-0
                  md:flex md:items-center md:gap-7 text-[15px] font-medium text-ink-2">
        <a href="#que-hacemos" class="block py-3 md:py-0 hover:text-accent transition-colors">¿Qué hacemos?</a>
        <a href="#trabajos" class="block py-3 md:py-0 hover:text-accent transition-colors">Trabajos</a>
        <a href="#opiniones" class="block py-3 md:py-0 hover:text-accent transition-colors">Clientes</a>
        <a href="#ubicacion" class="block py-3 md:py-0 hover:text-accent transition-colors">Dónde estamos</a>
      </nav>

      <!-- Aparece recién cuando el CTA del hero sale de pantalla -->
      ${botonWhatsapp(
        "header-wsp",
        `inline-flex items-center justify-center gap-2 shrink-0
         h-11 w-11 md:w-auto md:px-4 rounded-lg
         bg-wa hover:bg-wa-ink active:bg-wa-ink text-white
         text-sm font-semibold
         shadow-[0_6px_14px_-8px_rgba(10,40,20,0.8)]
         opacity-0 translate-y-1 pointer-events-none
         transition-[opacity,transform,background-color] duration-300`,
        `<span class="hidden md:inline">WhatsApp</span>`
      )}

      <label for="menu-toggle"
             class="md:hidden shrink-0 grid place-items-center h-11 w-11 -mr-2 rounded-lg
                    text-ink cursor-pointer hover:bg-panel transition-colors
                    peer-focus-visible:outline peer-focus-visible:outline-2
                    peer-focus-visible:outline-accent peer-focus-visible:outline-offset-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8"
             viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
      </label>

    </div>
  </header>

  <main>
  <!-- ================= HERO ================= -->
  <section id="inicio" class="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 ${DEMO ? "pt-32 md:pt-40" : "pt-24 md:pt-32"} pb-16 md:pb-28">
    <div class="grid md:grid-cols-12 gap-10 md:gap-12 items-center">

      <div class="md:col-span-6 lg:col-span-5">
        <h1 class="display text-[2.05rem] leading-[1.07] sm:text-5xl lg:text-[3.3rem] font-bold text-ink">
          Pedí tu turno por WhatsApp y llevá el auto cuando te quede cómodo.
        </h1>
        <p class="mt-5 text-base sm:text-lg leading-relaxed text-ink-2 max-w-[44ch]">
          Mecánica integral en ${CIUDAD}. Te decimos qué tiene el auto y te
          pasamos el presupuesto antes de arreglar nada de más.
        </p>

        <div class="mt-8">
          ${botonWhatsapp(
            "hero-cta",
            `inline-flex items-center justify-center gap-2.5 w-full sm:w-auto
             px-6 py-4 rounded-lg
             bg-wa hover:bg-wa-ink active:bg-wa-ink text-white
             text-base font-semibold
             shadow-[0_10px_22px_-12px_rgba(10,40,20,0.9)]
             transition-colors`,
            "Pedir turno por WhatsApp"
          )}
        </div>

        <p class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-ink-3">
          <span>Estamos en
            <a href="${MAPS_URL}" target="_blank" rel="noopener"
               class="text-accent font-medium underline underline-offset-4 decoration-line hover:decoration-accent transition">${CIUDAD}</a>.
          </span>
          ${dato(DIRECCION, "Dirección a completar")}
        </p>
      </div>

      <div class="md:col-span-6 lg:col-span-7">
        <figure>
          <img src="/assets/wrench-parts.jpg" width="360" height="640" loading="eager" decoding="async"
               alt="Piezas de motor desarmadas sobre el banco de trabajo del taller"
               class="w-full h-[240px] sm:h-[340px] lg:h-[420px] object-cover rounded-2xl bg-panel
                      shadow-[0_18px_40px_-18px_rgba(138,90,31,0.45)]" />
        </figure>
      </div>

    </div>
  </section>

  <!-- ================= QUÉ HACEMOS ================= -->
  <section id="que-hacemos" class="scroll-mt-16 bg-panel py-16 md:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">

      <h2 class="display text-2xl md:text-3xl font-bold text-ink reveal">¿Qué hacemos?</h2>

      <ul class="mt-10 md:mt-12 grid sm:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-10">
        ${ESPECIALIDADES.map(
          (e, i) => `
          <li class="reveal border-t border-line pt-5" style="transition-delay:${i * 70}ms">
            <span class="block text-accent">${e.icono}</span>
            <h3 class="mt-4 text-[17px] font-bold text-ink">${e.titulo}</h3>
            <p class="mt-2 text-[15px] leading-relaxed text-ink-2">${e.texto}</p>
          </li>`
        ).join("")}
      </ul>

    </div>
  </section>

  <!-- ================= TRABAJOS ================= -->
  <section id="trabajos" class="scroll-mt-16 mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-28">

    <h2 class="display text-2xl md:text-3xl font-bold text-ink reveal">Trabajos del taller</h2>

    <div class="mt-10 md:mt-14 grid md:grid-cols-2 gap-10 md:gap-12">

      <!-- Trabajo 1: la pareja antes/después real que encontramos en su Instagram -->
      <article class="reveal">
        <div class="grid grid-cols-2 gap-1 rounded-xl overflow-hidden bg-line">
          <div class="relative">
            <span class="absolute top-2 left-2 z-10 px-2 py-0.5 rounded
                         bg-ink text-white text-[10px] font-bold tracking-[0.1em]">ANTES</span>
            <img src="/assets/motor-antes.jpg" width="295" height="174" loading="lazy" decoding="async"
                 alt="Motor de un Ford con la correa de distribución y la bomba de agua originales, antes del cambio"
                 class="w-full h-40 sm:h-56 object-cover bg-panel" />
          </div>
          <div class="relative">
            <span class="absolute top-2 left-2 z-10 px-2 py-0.5 rounded
                         bg-accent text-white text-[10px] font-bold tracking-[0.1em]">DESPUÉS</span>
            <img src="/assets/motor-despues.jpg" width="295" height="130" loading="lazy" decoding="async"
                 alt="El mismo motor Ford con la distribución y la bomba de agua ya cambiadas"
                 class="w-full h-40 sm:h-56 object-cover bg-panel" />
          </div>
        </div>
        <h3 class="mt-5 text-lg font-bold text-ink">Distribución y bomba de agua</h3>
        <p class="mt-2 text-[15px] leading-relaxed text-ink-2">
          Ford. Cambio completo de la correa de distribución y la bomba de
          agua, el service que evita una rotura grande del motor más
          adelante.
        </p>
      </article>

      <!-- FOTO PLACEHOLDER: segundo trabajo, falta la pareja antes/después -->
      <article class="reveal" style="transition-delay:70ms">
        <div class="grid place-items-center h-40 sm:h-56 rounded-xl
                    border border-dashed border-line bg-panel text-center px-6">
          <span class="ph text-ink-3">Fotos a completar</span>
        </div>
        <h3 class="mt-5 text-lg font-bold text-ink-3">Nombre del trabajo</h3>
        <p class="mt-2 text-[15px] leading-relaxed text-ink-3">
          Acá va una descripción breve: qué se le hizo al auto y cómo quedó.
        </p>
      </article>

    </div>
  </section>

  <!-- ================= OPINIONES ================= -->
  <section id="opiniones" class="scroll-mt-16 bg-panel py-14 md:py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="reveal">

        <h2 class="display text-2xl md:text-3xl font-bold text-ink">Clientes</h2>

        <div class="mt-6 flex flex-wrap items-center gap-x-10 gap-y-5">
          <dl class="flex gap-x-10 text-sm">
            <div>
              <dt class="text-ink-3">Puntaje</dt>
              <dd class="mt-1.5 font-semibold text-ink">${dato(GOOGLE_PUNTAJE, "A completar")}</dd>
            </div>
            <div>
              <dt class="text-ink-3">Reseñas</dt>
              <dd class="mt-1.5 font-semibold text-ink">${dato(GOOGLE_RESENAS, "A completar")}</dd>
            </div>
          </dl>

          <a href="${MAPS_URL}" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 px-5 py-3 rounded-lg
                    border border-accent text-accent font-semibold text-[15px]
                    hover:bg-accent hover:text-white active:bg-accent-ink transition-colors">
            <span>Ver las opiniones en Google Maps</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8"
                 viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h13m0 0-5-5m5 5-5 5"/>
            </svg>
          </a>
        </div>

        <div class="mt-10 md:mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          ${RESENAS.map(
            (r) => `
            <blockquote class="border-t border-line pt-5">
              ${estrellas(r.estrellas)}
              <p class="mt-3 text-[15px] leading-relaxed text-ink-2">${r.texto}</p>
              <footer class="mt-4 text-sm font-semibold text-ink">${r.autor}</footer>
            </blockquote>`
          ).join("")}
        </div>

      </div>
    </div>
  </section>

  <!-- ================= DÓNDE ESTAMOS ================= -->
  <section id="ubicacion" class="on-dark scroll-mt-16 bg-shell text-white py-16 md:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-12 gap-10 md:gap-14 items-center">

      <div class="md:col-span-5 reveal">
        <h2 class="display text-2xl md:text-3xl font-bold">Dónde estamos</h2>

        <dl class="mt-7 space-y-5 text-[15px]">
          <div>
            <dt class="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Dirección</dt>
            <dd class="mt-1.5 text-white/90">
              ${dato(DIRECCION, "Dirección a completar")}
              <span class="block mt-1">${CIUDAD}</span>
            </dd>
          </div>
          <div>
            <dt class="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Horarios</dt>
            <dd class="mt-1.5 text-white/90">${dato(HORARIOS, "Horarios a completar")}</dd>
          </div>
          <div>
            <dt class="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Teléfono</dt>
            <dd class="mt-1.5 text-white/90">
              ${
                TELEFONO
                  ? `<a href="tel:${String(TELEFONO).replace(/\s/g, "")}" class="underline underline-offset-4 decoration-white/30 hover:decoration-white transition">${TELEFONO}</a>`
                  : `<span class="ph">Teléfono a completar</span>`
              }
            </dd>
          </div>
        </dl>

        <a href="${INSTAGRAM}" target="_blank" rel="noopener"
           class="mt-7 mr-6 inline-flex items-center gap-2 text-[15px] font-semibold text-white
                  underline underline-offset-4 decoration-white/40 hover:decoration-white transition">
          <span>Ver más en Instagram</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8"
               viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h13m0 0-5-5m5 5-5 5"/>
          </svg>
        </a>

        <a href="${MAPS_URL}" target="_blank" rel="noopener"
           class="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-white
                  underline underline-offset-4 decoration-white/40 hover:decoration-white transition">
          <span>Abrir en Google Maps</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8"
               viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h13m0 0-5-5m5 5-5 5"/>
          </svg>
        </a>
      </div>

      <div class="md:col-span-7 reveal">
        <div class="w-full h-64 md:h-[380px] rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
          <iframe src="${MAPS_EMBED}" title="Mapa con la ubicación del taller en Neuquén capital"
                  class="w-full h-full" style="border:0;" loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>

    </div>
  </section>
  </main>

  <!-- ================= FOOTER ================= -->
  <footer class="bg-shell text-white/45 border-t border-white/10">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 py-10
                flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[13px]">
      <p class="text-white/70 font-medium">${TALLER}</p>
      <p class="flex flex-wrap gap-x-4 gap-y-1">
        <span>© <span id="anio"></span></span>
        <span>Desarrollado por Juan Manuel Sanchez</span>
      </p>
    </div>
  </footer>
`;

/* ====================== COMPORTAMIENTO ====================== */

document.getElementById("anio").textContent = new Date().getFullYear();

/* Revelado al hacer scroll. Una vez que entró, se deja de observar. */
const revelables = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
  );

  revelables.forEach((el) => revealObserver.observe(el));
} else {
  revelables.forEach((el) => el.classList.add("active"));
}

/* El WhatsApp del header aparece cuando el CTA del hero sale de pantalla. */
const headerWsp = document.getElementById("header-wsp");
const heroCta = document.getElementById("hero-cta");

if (heroCta && headerWsp && "IntersectionObserver" in window) {
  const ctaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        headerWsp.classList.toggle("opacity-0", entry.isIntersecting);
        headerWsp.classList.toggle("translate-y-1", entry.isIntersecting);
        headerWsp.classList.toggle("pointer-events-none", entry.isIntersecting);
      });
    },
    { threshold: 0 }
  );

  ctaObserver.observe(heroCta);
}

/* El menú lo abre y lo cierra el checkbox; esto sólo lo cierra al elegir. */
const menuToggle = document.getElementById("menu-toggle");

document.querySelectorAll("#menu-principal a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
  });
});

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

/* ====================================================================
   <!-- DATOS A COMPLETAR -->

   Esto es una PÁGINA DE MUESTRA. Está armada con datos públicos del taller,
   sacados de su ficha de Google Maps, de su Instagram y de su Facebook.
   Nada está inventado, pero tampoco está confirmado por ellos.

   Lo que ya está cargado, y de dónde salió:

   · Dirección: San Martín 2109, de la ficha de Google (coincide con poraca.com.ar).
     OJO: su Facebook menciona una "sucursal" en San Martín 2175. Puede ser
     una segunda ubicación, no un error de carga. Preguntar.
   · Teléfono de la ficha de Google: 0299 632-6744. Confirmado que tiene
     WhatsApp (al abrir el link aparece el perfil "Taller Movicar").
   · WhatsApp usado en la página: 2994123791, el que ellos mismos publican
     en el bio de Instagram y en un posteo de Facebook para pedir turno.
     Es DISTINTO del fijo de Google. Confirmar con el taller cuál prefieren
     que usen los clientes.
   · Horarios: NO CARGADOS. Tres fuentes dicen tres cosas distintas:
     Google Maps dice lunes a viernes de 8 a 17 corrido; Guía Cores dice
     lunes a viernes de 8 a 13 y de 15:30 a 18; InfoRueda dice lunes
     cerrado y martes a viernes de 8 a 13 y de 15:30 a 18. Mejor preguntar
     directo que publicar un horario que puede estar mal.
   · Puntaje y reseñas: 4,6 con 283 reseñas, de Google Maps.
   · Las tres reseñas son reales, copiadas tal cual de Google, con las
     estrellas verificadas una por una (las tres son de 5).
   · Años de trayectoria: su Instagram dice "20+ años cuidando tu auto".
     No lo puse como dato aparte, lo usé de contexto para el copy, pero es
     un dato de ellos mismos, no inventado.
   · Las cuatro especialidades (diagnóstico, frenos, suspensión y
     dirección, service y cambio de aceite) salen de las categorías que
     Google les armó automáticamente a partir de reseñas de clientes, más
     lo que cuentan dos reseñas puntuales (la de Yasmin sobre distribución
     y frenos, la de Jesús sobre el presupuesto antes de reparar).
   · Foto del hero (banco con piezas de motor) y el par antes/después de
     "Trabajos" (distribución y bomba de agua de un Ford) son reales, de su
     Instagram. La mayoría de las fotos de esa cuenta son gráficas de
     marketing con texto superpuesto, inservibles tal cual; estas dos las
     recorté para sacar el texto y dejar sólo la foto. Un posteo del feed
     está marcado por la propia Instagram como "Contenido de IA": ese no se
     usó para nada.

   Lo que hay que pedirle al taller si contesta:

   1. SEGUNDO TRABAJO. Falta una segunda pareja de antes y después para
      completar la sección.
   2. HORARIOS. Confirmar cuál de las tres versiones es la real.
   3. WHATSAPP. Confirmar si prefieren que los clientes escriban al
      2994123791 (el de Instagram) o al fijo de Google.
   4. DIRECCIÓN. Confirmar si la sucursal de San Martín 2175 es otra
      ubicación o un dato viejo.
   5. DOMINIO. Después va "url" en el JSON-LD y og:image absoluto.

   Cuando dejen de ser muestra: poner DEMO en false, arriba del archivo.
==================================================================== */
