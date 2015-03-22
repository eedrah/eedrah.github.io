$(run);

function run(){
    createJqueryAnimations();
    bindSliders();
}

function bindSliders(){
    $('h3').each(initiallyHideText);
    $('li').hover(showText, hideText);
};

function initiallyHideText(){
    var $this = $(this);
    var marginLeft = -$this.outerWidth();
    $this.css('marginLeft', marginLeft);
};

function showText(evnt){
    console.log('show');
    $(evnt.currentTarget).children().first().children().first().blindLeftIn(200);
};

function hideText(evnt){
    console.log('hide');
    $(evnt.currentTarget).children().first().children().first().blindLeftOut(200);
};

function createJqueryAnimations(){
    jQuery.fn.blindLeftOut = function (duration, easing, complete) {
        return this.animate({
            marginLeft: -this.outerWidth()
        }, jQuery.speed(duration, easing, complete));
    };

    jQuery.fn.blindLeftIn = function (duration, easing, complete) {
        return this.animate({
            marginLeft: 0
        }, jQuery.speed(duration, easing, complete));
    };
};