//acc
document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('.faq__header');

    headers.forEach(header => {
        
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            this.classList.toggle('active');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});

//menu
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('.header__menu');
    const closeBtn = document.querySelector('#close-btn');
    const menuLinks = document.querySelectorAll('.header__menu a');

    burger.addEventListener('click', function() {
        menu.classList.toggle('open');
        burger.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function() {
        menu.classList.remove('open');
        burger.classList.remove('open');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('open');
            burger.classList.remove('open');
        });
    });
});
