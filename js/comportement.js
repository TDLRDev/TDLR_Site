$(document).ready(init);

function init()
{
    $('#fullpage').fullpage({
        verticalCentered: false,
        anchors: ['homePage', 'pageJeu', 'pageNews', 'pageHistoire', 'PageNous'],
	    menu: '#myMenu'
    });
}