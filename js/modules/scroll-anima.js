export default class ScrollAnima{
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.85; // pega um pouco mais da altura da tela para carregar o conteudo
    this.animaScroll = this.animaScroll.bind(this);
  }
  

  animaScroll() {
   const classeAtiva = "ativo";
   this.sections.forEach((section) => {
     const sectionTop = section.getBoundingClientRect().top;
     const isSectionVisible = sectionTop - this.windowMetade < 0;

     if (isSectionVisible) {
       section.classList.add(classeAtiva);
     } else if (section.classList.contains("ativo")) {
       section.classList.remove(classeAtiva);
     }
   });
 }

 init(){
  this.animaScroll();
  window.addEventListener("scroll", this.animaScroll);
 }

}
