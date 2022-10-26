export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");
    
    // Remove any existing DOM children
    contentDiv.replaceChildren();

    //heading Dom
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to our Bar";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    //Landing page image
    const centerImg = document.createElement("img");
    centerImg.classList.add("center-img");
    centerImg.src = ("../src/assets/restaurant-image.jpg");
    centerImg.alt = ("Restaurant image");
    contentDiv.appendChild(centerImg);

    
    //Dom for 1st paragraph
    const para1 = document.createElement("p");
    para1.classList.add("landing-page-load");
    para1.textContent = "Best drinks and fun conversations.";
    contentDiv.appendChild(para1);

    
    //Dom for 2nd paragraph
    const para2 = document.createElement("p");
    para2.classList.add("landing-page");
    para2.textContent = "Your friends are already here.";
    contentDiv.appendChild(para2);
}