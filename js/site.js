document.addEventListener('DOMContentLoaded', function() {
    Init()
 }, false);


function Init()
{
    var OpenMenuButton = document.getElementsByClassName('page-nav_button-open-Menu')[0];
    var CloseMenuButton = document.getElementsByClassName('page-nav_button-close-Menu')[0];
    var Menu = document.getElementsByClassName('page-nav__main-menu-list')[0];

    OpenMenuButton.onclick = function()
    {
        Menu.classList.remove("visually-hidden"); // удалить класс «class-name»
    }
    CloseMenuButton.onclick = function()
    {
        Menu.classList.add("visually-hidden"); // добавить класс «class-name»
    }
}