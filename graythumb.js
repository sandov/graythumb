let style = document.createElement('style');

const selectors = [
    'ytd-browse.style-scope.ytd-page-manager',
    '.ytd-watch-next-secondary-results-renderer',
    '#contents.style-scope.ytd-rich-grid-renderer',
];

const declaration = "{filter: grayscale(100%);}";

const rule = selectors.join(', ') + declaration;

if(style.styleSheet){
    style.styleSheet.cssText=rule;
}else{
    style.appendChild(document.createTextNode(rule));
}
document.getElementsByTagName('head')[0].appendChild(style);