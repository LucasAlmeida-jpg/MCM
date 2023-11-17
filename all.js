
document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling

        button.classList.toggle('accordion__button--active')

        if (button.classList.contains('accordion__button--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        }
        else {
            accordionContent.style.maxHeight = 0
        }
    })
})

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar')[0]
toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

jQuery(document).on("click", ".menu-item", function () {
    jQuery(".navbar").removeClass("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".img-right");

    img.addEventListener("animationend", function () {
        img.style.animation = "bounce 0.5s ease forwards";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    function isElementInViewport(el, margin) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= -margin &&
            rect.left >= -margin &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + margin &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) + margin
        );
    }

    function handleScroll() {
        var elements = document.querySelectorAll(".scroll-animation");

        elements.forEach(function (element) {
            if (isElementInViewport(element, 800)) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();
});
