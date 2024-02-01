function toggleNavigation() {
    var menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
}
const pageButtons = document.querySelectorAll('.menu'); 
const correctPage = window.location.pathname;
debugger

pageButtons.forEach(thisLink => {
    const thisLinkPath = new URL(thisLink.querySelector('a').href).pathname;
    if (correctPage === thisLinkPath) {
        thisLink.classList.add('active');
    }
});
