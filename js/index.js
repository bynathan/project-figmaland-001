window.confirm('Clique em OK, para vizualizar o Projeto.')
window.confirm('Este é o link para visualizar o diretorio do Projeto no GitHub:  https://bynathan.github.io/project-figmaland/')

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
