export default class TabNav {
    constructor(menu, content) {
        this.tabMenu = document.querySelectorAll(menu);
        this.tabContent = document.querySelectorAll(content);
        this.activeClass = 'ativo';
    }
  
    activeTab(index) {
      this.tabContent.forEach((section) => {
        section.classList.remove(this.activeClass);
      });
      const direcao = this.tabContent[index].dataset.anime;
      this.tabContent[index].classList.add(this.activeClass, direcao);
    }
  
    activeImg(img) {
      this.tabMenu.forEach((li) => {
        li.classList.remove("img-selecionada");
      });
      this.tabMenu[img].classList.add("img-selecionada");
    }

    //adiciona os eventos nas tabs
    addTabNavEvent(){
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => this.activeTab(index));
          });
      
          this.tabMenu.forEach((imgMenu, img) => {
            imgMenu.addEventListener("click", () => this.activeImg(img));
          });
    }

    init(){
        if (this.tabMenu.length && this.tabContent.length){
            //ativar primeiro item
            this.activeTab(0);
            this.activeImg(0);
            this.addTabNavEvent();
        }
    }
  }