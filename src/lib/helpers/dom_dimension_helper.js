export function SetWidth(elSelector, width){
    document.querySelector(elSelector).style.width = width;
}

export function SetHeight(elSelector, height){
    document.querySelector(elSelector).style.height = height;
}

export function SetDimensions(elSelector, width, height){
    Setwidth(elSelector,  width );
    SetHeight(elSelector, height);
}

export function stylePage(){
    SetWidth('body', document.querySelector('html').offsetWidth);
}