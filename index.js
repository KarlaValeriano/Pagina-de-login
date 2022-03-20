$('.loginbtn').click(function(){
$('.login').show();
$('.singup').hide();
$('.loginbtn').css({'border-bottom' : '2px solid #ff4141'});

$('.loginbtn').css({'border-style' : 'none'});
})

$('.btnsignup').click(function(){
    $('.login').hide();
    $('.singup').show();
    $('.btnsignup').css({'border-bottom' : '2px solid #ff4141'});

    $('.btnsignup').css({'border-style' : 'none'});
    })