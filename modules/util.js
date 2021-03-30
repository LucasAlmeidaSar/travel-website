export function addRemoveClass(bool, className, ...elements){
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


export function itensAddRemoveClass(item, classAdd, classRemove) {
    for (var i = 0; i < item.length; i++) {
        item[i].classList.add(classAdd);
        item[i].classList.remove(classRemove);
    }
}


export function removeOrAddClass(item, className, boll) {
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
