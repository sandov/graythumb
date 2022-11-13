let style = document.createElement('style');

const selectors = [
    'ytd-thumbnail',
    '#avatar img',
    'ytd-playlist-thumbnail'
];

const declaration = "{filter: grayscale(100%);}";

const rule = selectors.join(', ') + declaration;

style.appendChild(document.createTextNode(rule));

document.head.appendChild(style);
