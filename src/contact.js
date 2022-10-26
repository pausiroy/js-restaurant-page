export function contact() {
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children
    contentDiv.replaceChildren();

    //heading Dom
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to our Bar";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);


}