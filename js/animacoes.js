// navegacao pot tab da section animais lista
function iniTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  function activeImg(img) {
    tabMenu.forEach((li) => {
      li.classList.remove("img-selecionada");
    });
    tabMenu[img].classList.add("img-selecionada");
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    tabMenu[0].classList.add("img-selecionada");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });

    tabMenu.forEach((imgMenu, img) => {
      imgMenu.addEventListener("click", () => {
        activeImg(img);
      });
    });
  }
}
iniTabNav();

// carregar conteudo ao fazer scroll no site
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.85; // pega um pouco mais da altura da tela para carregar o conteudo

  function animaScroll() {
   const classeAtiva = "ativo";
   sections.forEach((section) => {
     const sectionTop = section.getBoundingClientRect().top;
     const isSectionVisible = sectionTop - windowMetade < 0;

     if (isSectionVisible) {
       section.classList.add(classeAtiva);
     } else if (section.classList.contains("ativo")) {
       section.classList.remove(classeAtiva);
     }
   });
 }

  if (sections.length) {
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
