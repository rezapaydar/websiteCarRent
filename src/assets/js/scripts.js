// import "@accursoft/jquery-caret";

function getloc(e){
alert(e.target.scrollTop)
}


let imgcont = document.getElementById('img-cont');
document.addEventListener('scroll', function () {

    if (window.innerWidth >= 1024) {


        if (window.pageYOffset < 1400 || window.pageYOffset > 2800) {
            //    alert(window.pageYOffset)
            $('img[alt="bg-down"]').css("display", "none")

        }
        else {

            $('img[alt="bg-down"]').css("display", "block")


        }
    }
    else if (window.innerWidth >= 768) {


        if (window.pageYOffset < 1400 || window.pageYOffset > 2800) {
            //    alert(window.pageYOffset)
            $('img[alt="bg-down"]').css("display", "none")

        }
        else {

            $('img[alt="bg-down"]').css("display", "block")


        }
    }
    else if (window.innerWidth <= 570) {


        if (window.pageYOffset < 3500 || window.pageYOffset > 4500) {
            //    alert(window.pageYOffset)
            $('img[alt="bg-down"]').css("display", "none")

        }
        else {

            $('img[alt="bg-down"]').css("display", "block")


        }
    }

})




setTimeout(() => {
    $('#loading-div-timing').css("display", "none")
}, 6000)



window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 54) {
        $('header#headsite').css("position", "fixed");
        $('header#headsite').css("transition", "0.3s");
        $('header#headsite').css("top", "0px");

    }
    if (window.pageYOffset <= 54) {
        $('header#headsite').css("transition", "0.3s");
        $('header#headsite').css("position", "absolute");
        $('header#headsite').css("top", "40px");



    }

})


let timesone = document.querySelector('.timesone');
let collSearch = document.querySelector('#coll-search-menu3');

collSearch.addEventListener('hover', () => {
    $(timesone).css("display", "block")
})