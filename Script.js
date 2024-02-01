 
    function toggleNavigation() {
        var menu = document.querySelector('.menu');
        menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
    }

    const mobilenavbar = document.getElementById("menuPhoto");
    mobilenavbar.addEventListener("click", toggleNavigation);
    
   
       
