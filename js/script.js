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
    var activeIcon = $('i.far.active');

    if (activeIcon.hasClass('first')) {
        var prevIcon =$('i.far.last');
        activeIcon.removeClass('active');
        prevIcon.addClass('active');
    
    } else {
        var prevIcon = activeIcon.prev('i.far');
        activeIcon.removeClass('active');
        prevIcon.addClass('active');
    }
}

function nextClck(){
    var activeImg = $('img.active');

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
    var activeIcon = $('i.far.active');

    if (activeIcon.hasClass('last')) {
        var prevIcon =$('i.far.first');
        activeIcon.removeClass('active');
        prevIcon.addClass('active');
    
    } else {
        var prevIcon = activeIcon.next('i.far');
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