// import "@accursoft/jquery-caret";

$('img[alt="bg-down"]').css("display", "none")
let imgcont = document.getElementById('img-cont');
let conterone = document.getElementById("conterone");
// document.addEventListener('click',()=>{
//     alert(window.pageYOffset)
// })
document.addEventListener('scroll', function () {

    if (window.innerWidth >= 1024) {


        if (window.pageYOffset < 750 || window.pageYOffset > 1700) {
            //    alert(window.pageYOffset)
            $('img[alt="bg-down"]').css("display", "none")

        }
        else {

            $('img[alt="bg-down"]').css("display", "block")
            $("#conterone").css("background", "none")


        }
    }
    else if (window.innerWidth >= 768) {


        if (window.pageYOffset < 650 || window.pageYOffset > 2000) {
            //    alert(window.pageYOffset)
            $('img[alt="bg-down"]').css("display", "none")

        }
        else {

            $('img[alt="bg-down"]').css("display", "block")
            $("#conterone").css("background", "none")


        }
    }
    else if (window.innerWidth <= 570) {

        // $("#conterone").css("background", "black")
        // $('img[alt="bg-down"]').css("display", "none")


        if (window.pageYOffset < 2050 || window.pageYOffset > 3500) {
            //    alert(window.pageYOffset)
            $('img[alt="bg-down"]').css("display", "none")

        }
        else {
            $('img[alt="bg-down"]').css("display", "block")
            $('img[alt="bg-down"]').css("width", "200% !important")

            // $(conterone).css("background", "black")


        }
    }
    else if (window.innerWidth <= 350) {

        // $("#conterone").css("background", "black")
        // $('img[alt="bg-down"]').css("display", "block")

        if (window.pageYOffset < 4500 || window.pageYOffset > 5000) {
            //    alert(window.pageYOffset)
            $('img[alt="bg-down"]').css("display", "none")

        }
        else {

            $('img[alt="bg-down"]').css("display", "block")


        }
    }


})

function getloc(e) {
    alert(e.target.scrollTop)
}







setTimeout(() => {
    $('#loading-div-timing').css("display", "none")
}, 5000)



window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 54) {
        $('header#headsite').css("position", "fixed");
        $('header#headsite').css("transition", "0.3s");
        $('header#headsite').css("top", "0px");
        $('header#headsite').css("background", "#fcfcfc");
        $('header#headsite').css("box-shadow", "20px 20px 60px #bebebe,-20px -20px 60px #ffffff");

    }
    if (window.pageYOffset <= 54) {
        $('header#headsite').css("transition", "0.3s");
        $('header#headsite').css("position", "absolute");
        $('header#headsite').css("top", "0");
        $('header#headsite').css("background", "transparent");
        $('header#headsite').css("box-shadow", "none");



    }

})


let timesone = document.querySelector('.timesone');
let collSearch = document.querySelector('#coll-search-menu3');

collSearch.addEventListener('hover', () => {
    $(timesone).css("display", "block")
})