var headerNavToggle = document.getElementsByClassName('header__nav-toggle')[0];

headerNavToggle.addEventListener('click', function() {
    var headerNavInner = document.getElementsByClassName('header__nav-toggle-inner')[0];

    headerNavToggle.classList.toggle('header__nav-toggle--active');
});