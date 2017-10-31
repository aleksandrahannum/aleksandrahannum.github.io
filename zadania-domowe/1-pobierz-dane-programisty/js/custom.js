'use strict';

$(function () {
    $('button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            console.log(data);
            
            var dane = document.createElement('div');

            dane.innerHTML = 'Imię: ' + data.imie + '<br>' + 'Nazwisko: ' + data.nazwisko + '<br>' + 'Zawód: ' + data.zawod + '<br>' + 'Frima: ' + data.firma;
            
            document.body.appendChild(dane);

        });
    });
});