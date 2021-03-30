import scrollPage from './modules/scroll.js'
import { addRemoveClass } from "./modules/util.js"
import { alternador, hamburguerLine, header, menu, menuOffCanvas, paragrafo, titulo, headerLinks } from './modules/elements.js'



// Ao carregar a página
onload = function animaHeader() {    
    addRemoveClass(false, "pre-load" , header, menu, titulo, paragrafo)   
}


// Ao scrollar a página
window.onscroll = () => scrollPage();



// Ativar e desativar menu off canvas
alternador.addEventListener( 'click' , toggleMenu);

function toggleMenu(){
    menuOffCanvas.classList.toggle('is-active');    
    hamburguerLine.classList.toggle('is-active');
}




// Evento de clique nos links do menu escondido
for (const link of headerLinks) {
    link.addEventListener('click' , activeLink )
}

function activeLink(){
    toggleMenu()
}



// Ao redimensionar a tela
window.addEventListener('resize' , widthWindow)

    function widthWindow(){
        let width = window.innerWidth
        
        if(width > 554){
            addRemoveClass(false, "is-active" , menuOffCanvas, hamburguerLine)            
        }
    }
