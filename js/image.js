const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesToChooseFrom = document.querySelectorAll(".gallery img");

imagesToChooseFrom.fEach(img => img.addEventListener('click', ImageClick));

function ImageClick(e) {

    imagesToChooseFrom.forEach(img => img.style.opacity = 1);

    currentMainImage.src = e.target.src;
    e.target.style.opacity = 0.5;
}