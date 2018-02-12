$(document).ready(init);

function init()
{
    $('#fullpage').fullpage({
        verticalCentered: false,
        navigation: true,
        anchors: ['homePage', 'firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	    menu: '#myMenu'
    });
}