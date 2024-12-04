/*==================== SEARCH ====================*/
const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')

/* search show */
if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}

/* search hidden */
if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}


/*==================== ADD SHADOW HEADER ====================*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* ====================HOME SWIPER==================== */
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centreredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
});



var navbarvertical = document.getElementById("navt");

navbarvertical.style.height = '0%';
function toggle() {

    if (navbarvertical.style.height == '0%') {
        navbarvertical.style.height = '50%';
    }
    else {
        navbarvertical.style.height = '0%';
    }

}
