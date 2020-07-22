//Scroll-up Button-JS
const toTop = document.querySelector(".up");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 650) {
            toTop.classList.add("active");
        }
        else{
            toTop.classList.remove("active");
        }
    });
//Pop-over Js
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});
   
    