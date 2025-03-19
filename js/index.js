document.querySelector(".container-subscription").addEventListener("mouseenter", function() {
    this.classList.add("ativo");
});

const card1 = document.querySelector("#card1")
const card2 = document.querySelector("#card2")
const card3 = document.querySelector("#card3");

card1.addEventListener("mouseenter", function() {
    card2.classList.add("active");
    card1.style.backgroundColor = "#001933";
    card1.style.boxShadow = "rgba(0, 25, 51, 0.5) 0px 0px 16px 8px";
});
card1.addEventListener("mouseleave", function() {
    card2.classList.remove("active")
    card1.style.backgroundColor = "#000F1F";
    card1.style.boxShadow = "unset";
});

card2.addEventListener("mouseenter", function() {
    card2.style.bottom = "1rem";
    card2.style.boxShadow = "rgba(0, 25, 51, 0.5) 0px 0px 16px 8px";
});

card2.addEventListener("mouseleave", function() {
    card2.style.bottom = "0";
    card2.style.boxShadow = "unset";
});

card3.addEventListener("mouseenter", function() {
    card2.classList.add("active");
    card3.style.backgroundColor = "#001933";
    card3.style.boxShadow = "rgba(0, 25, 51, 0.5) 0px 0px 16px 8px";
});
card3.addEventListener("mouseleave", function() {
    card2.classList.remove("active")
    card3.style.backgroundColor = "#000F1F";
    card3.style.boxShadow = "unset";
});

