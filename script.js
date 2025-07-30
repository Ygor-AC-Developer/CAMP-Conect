document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const sidebarMain = document.getElementById("sidebar-main");
  const sidebarSub = document.getElementById("sidebar-sub");
  const submenuContent = document.getElementById("submenu-content");
  const closeMain = document.getElementById("close-main");
  const backToMain = document.getElementById("back-to-main");

  const subitens = {
    sobre: [
      { texto: "História", href: "#" },
      { texto: "Missão", href: "#" }
    ],
    servicos: [
      { texto: "Aprendiz", href: "#" },
      { texto: "Social", href: "#" }
    ]
  };

  toggle.addEventListener("click", () => {
    sidebarMain.classList.add("active");
    toggle.style.display = "none";
  });

  closeMain.addEventListener("click", () => {
    sidebarMain.classList.remove("active");
    toggle.style.display = "block";
  });

  backToMain.addEventListener("click", () => {
    sidebarSub.classList.remove("active");
    sidebarMain.classList.add("active");
  });

  document.querySelectorAll(".mobile-menu li[data-submenu]").forEach(item => {
    item.addEventListener("click", () => {
      const tipo = item.getAttribute("data-submenu");
      const conteudo = subitens[tipo];

      submenuContent.innerHTML = "";
      conteudo.forEach(opcao => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = opcao.href;
        a.textContent = opcao.texto;
        li.appendChild(a);
        submenuContent.appendChild(li);
      });

      sidebarMain.classList.remove("active");
      sidebarSub.classList.add("active");
    });
  });

  if (closeMain) {
    closeMain.addEventListener("click", () => {
      sidebarMain.classList.remove("active");
      toggle.style.display = "block";
    });
  }

})
