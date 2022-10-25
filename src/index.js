import { initialPageLoad } from "./initial-page-load.js"
import { menu } from "./menu.js"
import { contact } from "./contact.js"

initialPageLoad();

let tabSwitch = (function() {

    const homeTab = document.querySelector("#home");
    homeTab.addEventListener("click", initialPageLoad);

    const menuTab = document.querySelector("#menu");
    menuTab.addEventListener("click", menu);

    const contacttab = document.querySelector("#contact");
    menuTab.addEventListener("click", contact);

})
