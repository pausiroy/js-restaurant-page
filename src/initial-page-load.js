export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to our Bar";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const centerImg = document.createElement("img");
    centerImg.classList.add("center-img");
    centerImg.src = ("../src/assets/restaurant-image.jpg");
    centerImg.alt = ("Restaurant image");
    contentDiv.appendChild(centerImg);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page");
    para1.textContent = "Best drinks and fun conversations.";
    contentDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page");
    para2.textContent = "Your friends are already here.";
    contentDiv.appendChild(para2);
}