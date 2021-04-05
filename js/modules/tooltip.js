export default class initTooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    //bindo do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip com base em seus stilos de acord com a posicao do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 1900}px`;
    }else{
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
    
  }

  // remove as tooltips e os eventos de mousemove e mouseleave
  onMouseLeave({currentTarget}) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("moousemove", this.onMouseMove);
  }

  // cria a tooltipbox e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver({currentTarget}) {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);

    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init(){
    if(this.tooltips.length){
      this.addTooltipsEvent();
    }

    return this;
  }

}
