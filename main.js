
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('window-scrolled', window.scrollY > 0);
    }
});








const textButtons = document.querySelectorAll('.contact_btn');
textButtons.forEach(textButton =>{
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style= "transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open');
const closeNavBtn = document.querySelector('#nav_toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}

openNavBtn.addEventListener('click', openNav)

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}

closeNavBtn.addEventListener('click', closeNav)

nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav)
})