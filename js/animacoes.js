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
