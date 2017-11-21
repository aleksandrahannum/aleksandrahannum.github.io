$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

//function check() {
//    if($('.MiniCartWithItems').css('display') == 'none') {
//    $('#Basket').on("mouseover", function() {
//        $('#MiniCart').css('display', 'none')
//    });
//}
//}
//
//
//if ($('.MiniCartWithItems').is(':visible')) {
//    $('#Basket').on("mouseover", function () {
//        $('#MiniCart').css('display', 'none')
//    });
//}
//
//$('#Basket').on('mouseover', function () {
//    if($('.MiniCartWithItems').length === 0) {
//        $('#MiniCart').css('display', 'none')
//    }; 
//});
//
//$('.btn2').css('background-color', 'green');
//
//$(function () {
//    if($('.btn2').prop('disabled', false)) {
//        $('.btn2').css({'background':'green'})
//    };
//};
//
// $('btn2').prop('disabled', false).css({'background':'green'});
//
//$('.btn2').on('disabled' function() {
//    $('.btn2').css({'background':'green'});
//});
//
//
//  $('.btn2-blue').css('background','green');
//
//function() {
//    $('.btn2').toggle
//}
//
//$('btn2')
//
//$(document).ready( function () {
//    
// });
//var button = document.get('button');
//$('.btn2').css('background', 'green');
//
//document.getElementsByClassName('btn2')[0].style.background ='green';