// window.addEventListener('load',function() {
//     while(true){
//         setInterval(() => {
//             document.
//         }, 1500);
//     }
// })
// let scroll = window.scrollY;
let imgcont = document.getElementById('img-cont');
document.addEventListener('scroll', function () {
    if (window.pageYOffset < 800 || window.pageYOffset > 1600) {
    //    alert(window.pageYOffset)
        $('img[alt="bg-down"]').css("display","none")
    }
    else {
        
        $('img[alt="bg-down"]').css("display","block")


    }
})

var swiper2 = new Swiper('.swipercontainer', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper2 = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#img-one',
        prevEl: '#img-two',
    },
});

var swiper2 = new Swiper('.swiperrcontainer', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#img-one',
        prevEl: '#img-two',
    },
});