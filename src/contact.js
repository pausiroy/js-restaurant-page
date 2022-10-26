import phoneImage from "./assets/phone.jpg"


export function contact() {
    
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children
    contentDiv.replaceChildren();

    //heading Dom
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to our Bar";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    //Phone image
    const phone = document.createElement("img");
    phone.classList.add("center-img");
    phone.src = phoneImage;
    phone.alt = ("phone image");
    contentDiv.appendChild(phone);

    //Dom for 1st paragraph
    const paraPhone = document.createElement("p");
    paraPhone.classList.add("contact-load");
    paraPhone.textContent = "Please give us a call";
    contentDiv.appendChild(paraPhone);
};