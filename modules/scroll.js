import { itensAddRemoveClass, addRemoveClass, removeOrAddClass } from './util.js'

export default function scrollPage(){

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