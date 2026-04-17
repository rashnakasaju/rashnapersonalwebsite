/* =========================================================
   RASHNA KASAJU - Personal Site JS
   ========================================================= */

(function () {
  "use strict";

  /* ---------- LOADER (circle ripple, first visit per session) ---------- */
  const loader = document.getElementById("loader");
  const alreadyLoaded = sessionStorage.getItem("rk-session-loaded") === "1";

  if (loader) {
    if (alreadyLoaded) {
      loader.remove();
      document.body.classList.add("loaded");
    } else {
      document.documentElement.style.overflow = "hidden";
      const MIN_DURATION = 1800;
      const FADE_OUT = 700;
      let started = false;
      const start = () => {
        if (started) return;
        started = true;
        setTimeout(() => {
          loader.classList.add("done");
          document.documentElement.style.overflow = "";
          document.body.classList.add("loaded");
          sessionStorage.setItem("rk-session-loaded", "1");
          setTimeout(() => loader.remove(), FADE_OUT);
        }, MIN_DURATION);
      };
      if (document.readyState === "complete") {
        start();
      } else {
        window.addEventListener("load", start, { once: true });
        setTimeout(start, 2500);
      }
    }
  }

  /* ---------- THEME TOGGLE (default LIGHT) + dissolve animation ---------- */
  const themeBtn = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("rk-theme");
  if (savedTheme === "dark") document.body.classList.add("dark");

  if (themeBtn) {
    const labelEl = themeBtn.querySelector(".label");
    const updateLabel = () => {
      const isDark = document.body.classList.contains("dark");
      if (labelEl) labelEl.textContent = isDark ? "Light" : "Dark";
    };
    updateLabel();

    let transitioning = false;
    themeBtn.addEventListener("click", () => {
      if (transitioning) return;
      transitioning = true;

      const goingDark = !document.body.classList.contains("dark");
      const overlay = document.createElement("div");
      overlay.className = "theme-dissolve" + (goingDark ? " to-dark" : "");
      document.body.appendChild(overlay);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => overlay.classList.add("show"));
      });

      setTimeout(() => {
        document.body.classList.toggle("dark");
        localStorage.setItem(
          "rk-theme",
          document.body.classList.contains("dark") ? "dark" : "light"
        );
        updateLabel();
      }, 430);

      setTimeout(() => {
        overlay.classList.remove("show");
      }, 520);

      setTimeout(() => {
        overlay.remove();
        transitioning = false;
      }, 1050);
    });
  }

  /* ---------- MOBILE NAV ---------- */
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");
  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll(".nav-links a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- SMOOTH ANCHOR SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ---------- LOCAL CLOCK (footer) ---------- */
  const clock = document.querySelector("[data-clock]");
  if (clock) {
    const pad = (n) => String(n).padStart(2, "0");
    const render = () => {
      const d = new Date();
      clock.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    };
    render();
    setInterval(render, 30000);
  }
})();
