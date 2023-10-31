export function IsTopOfPage(){
    if(window.scrollY === 0){
        return true;
    }
    if(window.scrollY != 0){
        return false;
    }
}