import { initialPageLoad } from "./initial-page-load.js"
import { menu } from "./menu.js"
import { contact } from "./contact.js"
import '../src/styles.css'

initialPageLoad();

//module for switching tabs
let tabSwitch = (function() {

    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", initialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu);

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contact);

})();
