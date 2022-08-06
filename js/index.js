window.confirm('Cliquem em OK, para vizualizar o projeto. Link do diretorio do projeto no GitHub: https://github.com/bynathan/projeto-figmaland-001 ')

const menuHambButton = document.getElementsByClassName('menu-hamb');
const navbarButton = document.getElementsByClassName('navbarbutton');
const oneTwoTree = document.getElementsByClassName('onetwotree');
const navbarMenu = document.getElementsByClassName('navbarmenu');

const toggle_on = function() {
    menuHambButton[0].classList.toggle('on');
    navbarButton[0].classList.toggle('on');
    oneTwoTree[0].classList.toggle('on');
    navbarMenu[0].classList.toggle('on');
};

oneTwoTree[0].addEventListener('click', toggle_on);
