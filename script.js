
// --------- Ao carregar a página ---------

var header = document.getElementById("header-page");
var menu = document.getElementById("nav-top");
var titulo = document.getElementById("header-page__title");
var paragrafo = document.getElementById("header-page__subtitle");

onload = function animaHeader() {    
    header.classList.remove("header-page--pre-load");
    menu.classList.remove("nav-top--pre-load");    
    titulo.classList.remove("header-page__title--pre-load");
    paragrafo.classList.remove("header-page__subtitle--pre-load");  
}







// --------- Ao scrollar a página ---------
window.onscroll = () => scrollPage();

function scrollPage() {

// --------- ANIMAÇÃO DO NAV-TOP ---------

    var navbar = document.getElementById("nav-top");
    var btn = document.getElementsByClassName("nav-top__btn");

    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        navbar.classList.add("nav-top--scroll");
        itensAddRemoveClass(btn, "btn--opaco", "btn--nav");
    } else {
        navbar.classList.remove("nav-top--scroll");
        itensAddRemoveClass(btn, "btn--nav", "btn--opaco");
    }



// --------- ANIMAÇÃO DO GRID - SEÇÃO 1 ---------

    var grid = document.getElementById("main-content__grid");

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        grid.classList.remove("main-content__grid--pre-load");
    } else {
        grid.classList.add("main-content__grid--pre-load");
    }



// --------- ANIMAÇÃO DA IMAGEM - SEÇÃO 3 ---------

    var mainContentPicture = document.getElementById("main-content__picture");
    
     if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
        mainContentPicture.classList.remove("main-content__picture--scroll");
    } else {
        mainContentPicture.classList.add("main-content__picture--scroll");
    }



// --------- ANIMAÇÃO DA IMAGEM - SEÇÃO 4 ---------

    var pictureSmallSection4 = document.getElementsByClassName("main-content__section--4__picture");
    var pictureBigSection4 = document.getElementsByClassName("main-content__section--4__picture--lg");

    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {        
        removeOrAddClass(pictureSmallSection4, "main-content__section--4__picture--scroll", true);
        removeOrAddClass(pictureBigSection4, "main-content__section--4__picture--lg--scroll", true);
        
    } else {       
        removeOrAddClass(pictureSmallSection4, "main-content__section--4__picture--scroll", false);
        removeOrAddClass(pictureBigSection4, "main-content__section--4__picture--lg--scroll", false);
    }

}



// Adiciona E remove Classe
function itensAddRemoveClass(item, classAdd, classRemove) {
    for (var i = 0; i < item.length; i++) {
        item[i].classList.add(classAdd);
        item[i].classList.remove(classRemove);
    }
}




// Adiciona OU remove classe
function removeOrAddClass(item, className, boll) {
    if(boll){
        for (var i = 0; i < item.length; i++) {            
            item[i].classList.remove(className);
            console.log(item[i]);
        }
    }else{
        for (var i = 0; i < item.length; i++) {            
            item[i].classList.add(className);
        }
    }    
}

