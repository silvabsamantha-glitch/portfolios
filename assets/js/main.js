/*
  Único script do site: menu de navegação no mobile.
  Sem JS, o menu aparece aberto (o CSS só esconde quando a classe .js existe).
*/
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var toggle = document.querySelector(".nav-toggle");
  if (!toggle) return;

  var menu = document.getElementById(toggle.getAttribute("aria-controls"));
  if (!menu) return;

  var mobile = window.matchMedia("(max-width: 767px)");

  function abrir() {
    toggle.setAttribute("aria-expanded", "true");
    menu.hidden = false;
  }

  function fechar(devolverFoco) {
    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
    if (devolverFoco) toggle.focus();
  }

  function aplicarModo() {
    if (mobile.matches) {
      fechar(false);
    } else {
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = false;
    }
  }

  toggle.addEventListener("click", function () {
    if (toggle.getAttribute("aria-expanded") === "true") {
      fechar(false);
    } else {
      abrir();
    }
  });

  // Esc fecha o menu e devolve o foco ao botão
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && mobile.matches && toggle.getAttribute("aria-expanded") === "true") {
      fechar(true);
    }
  });

  // Escolher um link fecha o menu
  menu.addEventListener("click", function (evento) {
    if (mobile.matches && evento.target.closest("a")) fechar(false);
  });

  // Clicar fora fecha o menu
  document.addEventListener("click", function (evento) {
    if (mobile.matches && toggle.getAttribute("aria-expanded") === "true" &&
        !menu.contains(evento.target) && !toggle.contains(evento.target)) {
      fechar(false);
    }
  });

  if (mobile.addEventListener) {
    mobile.addEventListener("change", aplicarModo);
  } else if (mobile.addListener) {
    mobile.addListener(aplicarModo);
  }

  aplicarModo();
})();
