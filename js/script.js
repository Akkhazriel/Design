const menu__btn = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__list');

if (menu__btn && menu) {
    menu__btn.addEventListener('click', () => {
        menu__btn.classList.toggle('active');
        menu.classList.toggle('active');
    })


    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu__btn.classList.toggle('active');
            menu.classList.toggle('active');
        })
    })
}

// Плавный скролл

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})

const createSelectedSection = (root) => {
    const nav = root.querySelector('nav');

    root.querySelectorAll('.observe').forEach(s => {
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    nav.querySelectorAll('a').forEach(link => link.classList.remove('active'));
                    let id = entry.target.getAttribute('id');
                    nav.querySelector(`a[href="#${id}"]`).classList.add('active');
                }
            })
        }, {}).observe(s);
    })
}

createSelectedSection(document.querySelector('#page'));