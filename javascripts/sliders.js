$(bindSliders);

function bindSliders(){
    $('h3').hide();
    $('li').hover(showText, hideText);
};

function showText(evnt){
    $(evnt.currentTarget).children().first().children().first().show();
};

function hideText(evnt){
    $(evnt.currentTarget).children().first().children().first().hide();
};