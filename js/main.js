const fullFields = document.querySelectorAll(".full-field");
const email = fullFields[2].querySelector(".field input");
const form = document.getElementById("form");


fullFields.forEach((field, index) => {
    const input = field.querySelector(".field input");
    const errorImg = field.querySelector(".field img");
    const label = field.querySelector("label");

    input.addEventListener("input", () => {
        if(input.value === "") {
            label.style.display = "block";
            errorImg.style.display = "block";
        } else {
            label.style.display = "none";
            errorImg.style.display = "none";
        }
    });
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    if(Array.from(fullFields).every(field => field.querySelector(".field input").checkValidity() === true))
        formData.forEach(value => console.log(value));
});
// Looks like this is not email