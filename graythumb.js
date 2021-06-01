let style = document.createElement('style');
style.type= 'text/css';

if(style.styleSheet){
    style.styleSheet.cssText='your css styles';
}else{
    style.appendChild(document.createTextNode('#contents.style-scope.ytd-rich-grid-renderer{filter: grayscale(100%);}'));
}
document.getElementsByTagName('head')[0].appendChild(style);

