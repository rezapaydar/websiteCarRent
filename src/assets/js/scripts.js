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


    setTimeout(()=>{
    $('#loading-div-timing').css("display","none")
  },6000)



window.addEventListener("scroll",()=>{
    if(window.pageYOffset>=54){
        $('header#headsite').css("position","fixed");
        $('header#headsite').css("transition","0.3s");
        $('header#headsite').css("top","0");
        
    }
    if(window.pageYOffset<=54){
        $('header#headsite').css("transition","0.3s");
        $('header#headsite').css("position","relative");
        

    }

})


let timesone=document.querySelector('.timesone');
let collSearch=document.querySelector('#coll-search-menu3');

collSearch.addEventListener('hover',()=>{
    $(timesone).css("display","block")
})