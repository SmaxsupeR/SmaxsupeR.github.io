const showMenu = function(toggleId, menuId){
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    
    if(toggle && menu){
        toggle.addEventListener('click', () => {
            menu.classList.toggle('show-menu');
        })
    }
}
showMenu('toggle', 'header-menu'); 
