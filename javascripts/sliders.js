$(run);

function run(){
    createJqueryAnimations();
    bindSliders();
}

function bindSliders(){
    $('a').hover(showText, hideText);
    $('a').click(checkIfOpen);
};

function checkIfOpen(evnt){
    if($(evnt.currentTarget).children().first().width() == 0){
        evnt.preventDefault();
        showText(evnt);
    };
};

function showText(evnt){
    $(evnt.currentTarget).children().first().slideOut(400);
};

function hideText(evnt){
    $(evnt.currentTarget).children().first().slideIn(400);
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