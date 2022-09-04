$(document).ready(function(){
    $(window).on('load scroll',function(){
    if($(window).scrollTop()>30){
        $('.navbar-style').css({'background':'#6c5ce7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    }else{
        $('.navbar-style').css({'background':'none','box-shadow':'none'});
    }
})


$(".faq-header").click(function(){

    $(this)+$('p').slideUp()
   
   $(this).next('p').slideDown();
   console.log($(this)+$('p'))
}
)})


