import scrollPage from '../modules/scroll.js'
import classOfElements from '../modules/util.js'
import startMenuOffCanvas from '../modules/menu.js'

// Header Elements
const itensHeader = document.querySelectorAll('.js-itensHeader')

const App = {

    start(){
        // Ao carregar a página
        window.onload =  () => {    
            classOfElements.remove("pre-load" , itensHeader)  
            startMenuOffCanvas() 
        }

        // Ao scrollar a página
        window.onscroll = () => scrollPage();
    }
}


export default App