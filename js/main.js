
function openMobileMenu(){
        
    var menuParent = document.querySelector(".mobile-menu");
    menuParent.style.visibility = "visible";
    menuParent.classList.add("active");

}

function closeMobileMenu(){
    var menuParent = document.querySelector(".mobile-menu");
    menuParent.classList.remove("active");
    menuParent.classList.add("out");

    setTimeout(() => {
        menuParent.style.visibility = "hidden";
        menuParent.classList.remove("out");
    }, 250);

}