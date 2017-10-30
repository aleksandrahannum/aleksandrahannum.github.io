'use strict';

$(function() {
    $('button').click(function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
//            console.log(data);
            var dane = $("<div></div>" + data.imie + "<br>" + data.nazwisko + "<br>" + data.zawod + "<br>" + data.firma);
            $("#dane-programisty").append(dane);
        
        });
    });
});

