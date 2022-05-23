// Header navbar

window.addEventListener('scroll', () => {
    var header = this.document.querySelector('#header');
    header.classList.toggle('sticky', window.scrollY > 0)
});
$(document).ready(function () {
    $('#menu-bar').click(function () {
        $('#menu-bar').toggleClass('fa-times')
        $('.menu').toggleClass('menu-toggle')
    })
    $(window).on('scroll load', function () {
        $('#menu-bar').removeClass('fa-times')
        $('.menu').removeClass('menu-toggle')
    })

})
const navbar = document.getElementById('header');
const topLink = document.querySelector('.top-link');

// ********** fixed navbar ************
window.addEventListener('scroll', function () {
    // console.log(window.pageYOffset)
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    }
    else {
        navbar.classList.remove('fixed-nav')
    }
    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    }
    else {
        topLink.classList.remove('show-link')
    }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
const linksContainer = document.querySelector('.links-container');

scrollLinks.forEach(function (link) {
    // console.log(link)
    link.addEventListener("click", function (e) {
        // console.log(e)
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        // console.log(e.currentTarget)
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the height
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        // console.log(containerHeight);
        let position = element.offsetTop - navHeight;
        // console.log(position)
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scroll({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;

    })
})