/**
 * Created by Nikolay Teplyakov on 29.03.2015.
 */
var hoverBool = false;

$(document).ready(function(){
    date = new Date();
    createCalendar('calendarSpace', date.getFullYear(), date.getMonth());

    $("#slidingBottom").click(function () {
        $("#slidingSpace").slideToggle();
    });

    $("#hoverIdentifier").hover(function () {
        animateHoverOpacity(this, 0.3, 300);
    });

    $("#closeButton").click(function () {
        $('#nullWnd').animate({
            opacity: 0
        }, 400, function() {
            $(this).hide();
        });
    });

});

function createCalendar(id, year, month){
    today = new Date();
    var table = '<table cellpadding="4" class="calendar"><tr><td colspan="7">'+ (today.getMonth()+1) + '.' + today.getFullYear() + '</td></tr>';
    table += '<tr><td>Пн</td><td>Вт</td><td>Ср</td><td>Чт</td><td>Пт</td><td>Сб</td><td>Вс</td></tr><tr>';
    d = new Date(year, month);
    for (var i = 0; i < getDay(d); i++){
        table += '<td></td>';
    }
    while(d.getMonth()==month) {
        table += '<td>'+d.getDate()+'</td>';
        if (getDay(d) == 6) {
            table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }
    table += '</tr></table>'
    $('#calendarSpace').html(table);
}

function getDay(date) {
    var day = date.getDay()
    if (day == 0) {
        day = 7;
    }
    return day - 1;
}

function animateHoverOpacity(object, deltay, delay) {
    if (!hoverBool) {
        $(object).animate({opacity: deltay}, delay, function() {
        });
        hoverBool = true;
    } else {
        $(object).animate({opacity: 1.0}, delay, function() {
        });
        hoverBool = false;
    }
}

function showNullWnd (title, content) {
    $("#title").html(title);
    $("#content").html(content);
    $('#nullWnd').show();
    $('#nullWnd').animate({
        opacity: 1
    }, 300, function () {
    });
}
