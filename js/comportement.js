$(document).ready(init);

function init()
{
    $('#fullpage').fullpage({
        verticalCentered: false,
        navigation: true,
        anchors: ['homePage', 'pageJeu', 'pageNews', 'pageHistoire', 'PageNous'],
	    menu: '#myMenu'
    });
}