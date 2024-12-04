document.addEventListener("DOMContentLoaded", function () {
    const modalName = document.getElementById("modal-name");
    const modalAge = document.getElementById("modal-age");
    const modalCity = document.getElementById("modal-city");
    const modalImg = document.getElementById("modal-img");
    const modalDescription = document.getElementById("modal-description");

    document.querySelectorAll(".btn-card").forEach(button => {
        button.addEventListener("click", function () {
            const card = button.closest(".card");
            const name = card.querySelector(".person-name").textContent;
            const age = card.querySelector(".person-age").textContent;
            const city = card.querySelector(".person-city").textContent;
            const imgSrc = card.querySelector(".person-img").getAttribute("src");
            const description = card.querySelector(".description").textContent;

            // Заполнение модального окна
            modalName.textContent = name;
            modalAge.textContent = age;
            modalCity.textContent = city;
            modalImg.setAttribute("src", imgSrc);
            modalDescription.textContent = description;
        });
    });
});
