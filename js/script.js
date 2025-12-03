document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    const menuDiv = document.getElementById('navbarNav');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (menuDiv.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(menuDiv, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});