import { MDCRipple } from '@material/ripple/';
import { MDCTopAppBar } from '@material/top-app-bar';
import 'bootstrap';

[].map.call(document.querySelectorAll('.mdc-button'), function (el) {
    return new MDCRipple.attachTo(el);
});

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
new MDCTopAppBar(topAppBarElement);