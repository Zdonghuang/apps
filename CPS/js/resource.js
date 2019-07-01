var timer=null;
$('#model_btn').on('click',function(){
    clearInterval(timer);
    timer=setTimeout(function(){
        $('.txt').css('display','block');
    },3000);
});

$('#sure').on('click',function(){
    $('.txt').css('display','none');
    window.location.href='optimization.html';

});