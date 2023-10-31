document.addEventListener("DOMContentLoaded", function () {
    var timelineContainers = document.querySelectorAll(".container");
    var timelineLine = document.querySelector(".timeline::after");

    function checkTimelineVisibility() {
        var timelineSection = document.getElementById("text-box_small");
        var rect = timelineSection.getBoundingClientRect();

        // Se a parte superior da seção da linha do tempo estiver visível no viewport
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            timelineContainers.forEach(function (container, index) {
                container.style.animationDelay = index + "s";
                container.style.opacity = 1;
            });

            // Adiciona classe para animar a linha
            timelineLine.classList.add("animate-line");

            // Remove o event listener após a animação ser acionada
            window.removeEventListener("scroll", checkTimelineVisibility);
        }
    }

    window.addEventListener("scroll", checkTimelineVisibility);
});
