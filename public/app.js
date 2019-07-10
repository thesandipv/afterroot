import { MDCRipple } from '@material/ripple/';

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-133685173-2');

const buttons = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
    return new MDCRipple.attachTo(el);
});