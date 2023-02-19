
// Khi click vào khung navbar thì sẽ đóng khung searchForm và carItem lại và tương tự

// -------------------KHUNG MENU NAVBAR----------------------
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
    loginForm.classList.remove('active');
}

// -------------------------TÌM KIẾM--------------------------
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    carItem.classList.remove('active');
    loginForm.classList.remove('active');
}

// -------------------------GIỎ HÀNG---------------------------
let carItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    carItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

// ----------------------------USER-----------------------------
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
}

// ------------------------SỬ LÝ SỰ KIỆN-------------------------
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
    loginForm.classList.remove('active');
}

// =========================================================================

// ------------------------SCROLLTOP-JQUERY-----------------------
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();  
        } else {
            $('#backtop').fadeOut();
        }
    });
    $('#backtop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        },500);
    });
});

$(document).ready(function(){

});

// ==========================================================




