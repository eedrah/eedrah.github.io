$(run);

function run(){
    createJqueryAnimations();
    bindSliders();
}

function bindSliders(){
    $('li').hover(showText, hideText);
};

function showText(evnt){
    $(evnt.currentTarget).children().first().children().first().slideOut(400);
};

function hideText(evnt){
    $(evnt.currentTarget).children().first().children().first().slideIn(400);
};

function createJqueryAnimations(){
    jQuery.fn.slideOut = function (duration, easing, complete) {
        return this.animate({
            maxWidth: 300,
            paddingRight: '10px'
        }, jQuery.speed(duration, easing, complete));
    };

    jQuery.fn.slideIn = function (duration, easing, complete) {
        return this.animate({
            maxWidth: 0,
            paddingRight: 0,
        }, jQuery.speed(duration, easing, complete));
    };
};