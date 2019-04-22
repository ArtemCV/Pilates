document.onload = Init;
function Init()
{
    var OpenMenuButton = document.getElementsByClassName('page-nav_button-open-Menu');
    var CloseMenuButton = document.getElementsByClassName('page-nav_button-close-Menu');

    alert(OpenMenuButton.length);

    OpenMenuButton[0].onclick(function()
    {
        alert("sadf");
    });
    CloseMenuButton[0].onclick(function()
    {
        alert("sadf");
    });
}