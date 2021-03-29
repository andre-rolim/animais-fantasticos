import ScrollSuave from './modules/scroll-suave.js';
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdownmenu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimaNumeros from './modules/anima-numeros.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimaNumeros();
