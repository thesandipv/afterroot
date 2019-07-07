import { MDCRipple } from '@material/ripple/index';

(adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-6628325093439880",
    enable_page_level_ads: true
});

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-133685173-2');

const buttons = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
    return new MDCRipple.attachTo(el);
})