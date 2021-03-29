export default function initTooltip() {
  
    const onMouseMove = {
    handleEvent() {
      this.tooltipBox.style.top = `event.pageY + 20 + "px"`;
      this.tooltipBox.style.left = `event.pageX + 20 + "px"`;
    },
  };

  const onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("moousemove", onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = `event.pageY + "px"`;
    tooltipBox.style.left = `event.pageX + "px"`;

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const tooltips = document.querySelectorAll("[data-tooltip]");
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

}
