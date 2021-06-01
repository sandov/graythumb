let style = document.createElement('style');

const selector = 'ytd-thumbnail';

const declaration = "{filter: grayscale(100%);}";

const rule = selector + declaration;

if(style.styleSheet){
    style.styleSheet.cssText=rule;
}else{
    style.appendChild(document.createTextNode(rule));
}
document.getElementsByTagName('head')[0].appendChild(style);
