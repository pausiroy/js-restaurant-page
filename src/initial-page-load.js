export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to our Bar";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);
}