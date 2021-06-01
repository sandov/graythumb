let style = document.createElement('style');

selectors = [
    'ytd-browse.style-scope.ytd-page-manager',
    '.ytd-watch-next-secondary-results-renderer',
    '#contents.style-scope.ytd-rich-grid-renderer',
];

declaration = "{filter: grayscale(100%);}";

rule = selectors.join(', ') + declaration;

if(style.styleSheet){
    style.styleSheet.cssText=rule;
}else{
    style.appendChild(document.createTextNode(rule));
}
document.getElementsByTagName('head')[0].appendChild(style);