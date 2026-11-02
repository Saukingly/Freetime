console.log(document);

//homepage
const p = document.querySelectorAll("main p");

p.forEach((p) => {
    p.addEventListener("click", () => {
        p.classList.toggle("unchecked");
    });
});