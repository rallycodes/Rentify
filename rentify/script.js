function toggleMenu() {
    console.log("Menü düğmesine tıklandı");
    var menu = document.querySelector(".linksandbuttons");
    var menuIcon = document.querySelector('.menu-icon');
    if (menu && menuIcon) {
        menu.classList.toggle("open");
        menuIcon.classList.toggle("open");
        console.log("Menü durumu değiştirildi");
    } else {
        console.log("Menü öğesi veya menü ikonu bulunamadı");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
        console.log("Menü ikonuna olay dinleyici eklendi");
    } else {
        console.log("Menü ikonu bulunamadı");
    }
});
