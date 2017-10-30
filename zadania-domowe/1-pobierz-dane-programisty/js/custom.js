'use strict';

$(function() {
    $('button').click(function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            console.log(data);
//            $('div').append('data');
            var div = document.createElement('div');
            div.innerHTML = data.name;
            
            document.body.appendChild(div);
        })
    })
});







//
//$('button').click(function() {
//        $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
//
//            console.log(data);
//
//var par = document.createElement('p');
//                        par.innerHTML = element.name;
//
//                        document.body.appendChild(par);
//
//
//        });
//        
//    });