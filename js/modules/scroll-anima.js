export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    // pega um pouco mais da altura da tela para carregar o conteudo
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  //pega a distancia de cada item em relacao ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  //verifica a distancia em cada objeto
  //em relacao ao scroll do site
  checkDistance() {
    const classeAtiva = "ativo";
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(classeAtiva);
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove(classeAtiva);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  //remove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
