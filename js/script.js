function prevClck(){
    var activeImg = $('.active');

    if (activeImg.hasClass('first')) {
        var prevImg =$('img.last');
        activeImg.removeClass('active');
        prevImg.addClass('active');
    
    } else {
        var prevImg = activeImg.prev('img');
        activeImg.removeClass('active');
        prevImg.addClass('active');
    }
}

function prevClckIcon(){
    var activeIcon = $('far.active');

    if (activeIcon.hasClass('first')) {
        var prevIcon =$('far.last');
        activeIcon.removeClass('active');
        prevIcon.addClass('active');
    
    } else {
        var prevIcon = activeIcon.prev('far');
        activeIcon.removeClass('active');
        prevIcon.addClass('active');
    }
}

function nextClck(){
    var activeImg = $('.active');

    if (activeImg.hasClass('last')) {
        var prevImg =$('img.first');
        activeImg.removeClass('active');
        prevImg.addClass('active');
    
    } else {
        var prevImg = activeImg.next('img');
        activeImg.removeClass('active');
        prevImg.addClass('active');
    }
}

function nextClckIcon(){
    var activeIcon = $('far.active');

    if (activeIcon.hasClass('far.last')) {
        var prevIcon =$('far.first');
        activeIcon.removeClass('active');
        prevIcon.addClass('active');
    
    } else {
        var prevIcon = activeIcon.next('far');
        activeIcon.removeClass('active');
        prevIcon.addClass('active');
    }
}



function init() {
    $('.next').click(nextClck);
    $('.prev').click(prevClck);
    $('.next').click(nextClckIcon);
    $('.prev').click(prevClckIcon);
}

$(document).ready(init);