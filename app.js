const btnStart = document.querySelector('#btn__start');
const btnText = document.querySelector('#btn__text');


const headerContentActive = document.querySelector('.header__content');
const headerTextAnim = document.querySelector('.header__textanim');
const headerLogo = document.querySelector('.header__logo');
const uptitle = document.querySelector('.uptitle');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const headerImage = document.querySelector('.header__image');
const headerStart = document.querySelector('.header__start')
const list = document.querySelectorAll('.list')


function listActive() {
    for ( i = 0; i < list.length; i++) {
    
        list[i].classList.add('list__active')
    }
}

function activeSite() {
    headerLogo.classList.add('active__logo')
    uptitle.classList.add('active__uptitle')
    title.classList.add('active__title')
    subtitle.classList.add('active__subtitle')
    headerImage.classList.add('active__image')
    btnStart.classList.add('btn__start__active')
    btnText.classList.add('btn__text__active')

    headerContentActive.classList.add('header__content__active')
    headerTextAnim.classList.add('header__textanim__active')
    headerStart.classList.add('header__start__active')
    listActive();
}

btnStart.addEventListener('click', activeSite)