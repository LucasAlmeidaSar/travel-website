
// --------- Ao carregar a página ---------

const header = document.getElementById("header-page");
const menu = document.getElementById("nav-top");
const titulo = document.getElementById("header-page__title");
const paragrafo = document.getElementById("header-page__subtitle");


//Função auxiliar para adicionar ou remover classes a elementos
function addRemoveClass(bool, className, ...elements){
    if (bool) {
        for( const element of elements ){
            element.classList.add(className)
        }
    }else{
        for( const element of elements ){
            element.classList.remove(className)
        }
    }
}



onload = function animaHeader() {    
    addRemoveClass(false, "pre-load" , header, menu, titulo, paragrafo)   
}






// --------- Ao scrollar a página ---------
window.onscroll = () => scrollPage();

function scrollPage(){

// --------- ANIMAÇÃO DO NAV-TOP ---------

    var navbar = document.getElementById("nav-top");
    var btn = document.getElementsByClassName("nav-top__btn");

    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        navbar.classList.add("scroll");
        itensAddRemoveClass(btn, "btn--opaco", "btn--nav");
    } else {
        navbar.classList.remove("scroll");      
        itensAddRemoveClass(btn, "btn--nav", "btn--opaco");
    }



// --------- ANIMAÇÃO DO GRID - SEÇÃO 1 ---------

    var grid = document.getElementById("main-content__grid");

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        addRemoveClass(false, "pre-load", grid)
    } else {
        addRemoveClass(true, "pre-load", grid)
    }



// --------- ANIMAÇÃO DA IMAGEM - SEÇÃO 3 ---------

    var mainContentPicture = document.getElementById("main-content__picture");
    
     if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
        addRemoveClass(false, "scroll" , mainContentPicture )        
    } else {
        addRemoveClass(true, "scroll" , mainContentPicture )
    }



// --------- ANIMAÇÃO DA IMAGEM - SEÇÃO 4 ---------

    var pictureSmallSection4 = document.getElementsByClassName("main-content__section--4__picture");
    var pictureBigSection4 = document.getElementsByClassName("main-content__section--4__picture--lg");

    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {    
        removeOrAddClass(pictureSmallSection4, "scroll", true);
        removeOrAddClass(pictureBigSection4, "scroll", true);
        
    } else {       
        removeOrAddClass(pictureSmallSection4, "scroll", false);
        removeOrAddClass(pictureBigSection4, "scroll", false);
    }

}


// ---------- Funções auxiliares ----------

function itensAddRemoveClass(item, classAdd, classRemove) {
    for (var i = 0; i < item.length; i++) {
        item[i].classList.add(classAdd);
        item[i].classList.remove(classRemove);
    }
}




function removeOrAddClass(item, className, boll) {
    if(boll){
        for (var i = 0; i < item.length; i++) {            
            item[i].classList.remove(className);            
        }
    }else{
        for (var i = 0; i < item.length; i++) {            
            item[i].classList.add(className);
        }
    }    
}




// ---------- MENU ESCONDIDO ----------
let alternador = document.querySelector('.js-alternador');
let menuOffCanvas = document.querySelector('.js-menuOffCanvas');
let hamburguerLine = document.querySelector('.js-hamburguerLine')


// Ativar e desativar menu
alternador.addEventListener( 'click' , toggleMenu);

function toggleMenu(){
    menuOffCanvas.classList.toggle('is-active');    
    hamburguerLine.classList.toggle('is-active');
}


// Ao clicar nos links do menu
let headerLinks = document.querySelectorAll(".header-page__link")

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
