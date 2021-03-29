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

// accordion list da section FAQ
function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  const activeClass = "ativo";

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

// funcao para fazer o scroll suave no site
function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scroollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scroollToSection);
  });
}
initScrollSuave();

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
