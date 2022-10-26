import coronaImage from "./assets/corona.jpg"
import modeloImage from "./assets/modelo.jpg"
import heinekenImage from "./assets/heineken.jpg"


export function menu() {
    
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children
    contentDiv.replaceChildren();

    //heading Dom
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to our Bar";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    //Corona image
    const corona = document.createElement("img");
    corona.classList.add("center-img");
    corona.src = coronaImage;
    corona.alt = ("Corona beer");
    contentDiv.appendChild(corona);

    //Dom for 1st paragraph
    const paraCorona = document.createElement("p");
    paraCorona.classList.add("menu-load");
    paraCorona.textContent = "A bottle of Corona";
    contentDiv.appendChild(paraCorona);
    
    //Modelo page image
    const modelo = document.createElement("img");
    modelo.classList.add("center-img");
    modelo.src = modeloImage;
    modelo.alt = ("Modelo beer");
    contentDiv.appendChild(modelo);
    
    //Dom for 2nd paragraph
    const paraModelo = document.createElement("p");
    paraModelo.classList.add("menu-load");
    paraModelo.textContent = "A bottle of Modelo";
    contentDiv.appendChild(paraModelo);

    

    //Heineken page image
    const heineken = document.createElement("img");
    heineken.classList.add("center-img");
    heineken.src = heinekenImage;
    heineken.alt = ("heineken beer");
    contentDiv.appendChild(heineken);

    //Dom for 3rd paragraph
    const paraHeineken = document.createElement("p");
    paraHeineken.classList.add("menu-load");
    paraHeineken.textContent = "A bottle of Heineken";
    contentDiv.appendChild(paraHeineken);

}