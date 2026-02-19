const menuItems = document.querySelectorAll('nav ul li');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const submenu = item.querySelector('.submenu');
        if (submenu && window.innerWidth < 1024 && !submenu.classList.contains('is-active')) {
            e.preventDefault(); // Stop the link from firing
            submenu.classList.toggle('is-active');
            item.classList.toggle('is-active');
        }
        else if (submenu && submenu.classList.contains('is-active')) {
            submenu.classList.remove('is-active');
            item.classList.remove('is-active');
        }
    });
});