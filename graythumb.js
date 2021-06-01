let style = document.createElement('style');

const selectors = [
    'ytd-thumbnail',
    '#avatar img',
];

const declaration = "{filter: grayscale(100%);}";

const rule = selectors.join(', ') + declaration;

if(style.styleSheet){
    style.styleSheet.cssText=rule;
}else{
    style.appendChild(document.createTextNode(rule));
}
document.getElementsByTagName('head')[0].appendChild(style);
