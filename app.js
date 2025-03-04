document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let progress = bar.getAttribute("data-progress");
        bar.style.width = progress + "%";
    });
});
