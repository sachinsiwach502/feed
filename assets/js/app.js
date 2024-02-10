let text = document.querySelectorAll(".link");
let bar = document.querySelectorAll(".menu")
let navBar = document.querySelector("nav");
console.log(text);
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        navBar.classList.add("scrolled");
        text.forEach(e => e.style.color = "white")
        // bar.style.backgroundColor = "white"
        bar.forEach(e => e.style.backgroundColor = "white")

    } else {
        navBar.classList.remove("scrolled");
        text.forEach(e => e.style.color = "black");
        bar.forEach(e => e.style.backgroundColor = "black");
    }
});

