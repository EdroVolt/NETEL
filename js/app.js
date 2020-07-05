const recentProjectRows = document.querySelectorAll(".recent-projects .row");
const recentProjectsSection = document.querySelector(".recent-projects");
const body = document.querySelector("body");

for (recentProjectRow of recentProjectRows) {
    recentProjectRow.addEventListener('click', showBiggerImage);
}

function showBiggerImage(event) {
    const image = event.target;

    // create a copy from the image element
    const biggerImage = image.cloneNode(true);

    // create box
    const box = document.createElement("div");
    box.classList.add("image-box");

    // create close button
    const btnClose = document.createElement("button");
    btnClose.classList.add("btn-close", "btn", "btn-dark", "btn-outline-secondary", "m-2");
    btnClose.textContent = "X";
    btnClose.addEventListener('click', () => {
        box.remove();
    });

    // append image and button to box
    box.appendChild(biggerImage);
    box.appendChild(btnClose);

    // append box to DOM
    recentProjectsSection.appendChild(box);
}