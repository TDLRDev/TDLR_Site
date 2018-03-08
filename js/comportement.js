$(document).ready(init);

function init()
{
    
    $('#fullpage').fullpage({
        verticalCentered: false,
        anchors: ['homePage', 'pageJeu', 'pageNews', 'pageHistoire', 'PageNous'],
	    menu: '#myMenu'
    });
    
   /* $('#niveauUn li').on('click', function() {
        $('#photo h2').text($('a', this).attr('title'));
        $('#big_pict').attr('src', $('a', this).attr('href'));
        $('#big_pict').attr('alt', $('a img', this).attr('alt'));
    });*/
    $('#toto').on('click', function() {
        //$('#photo h2').text($('a', this).attr('title'));
        $('#description img').first().attr('class', 'imageMinInactive');
        $('#description img:nth-child(2)').attr('class', 'imageMinActive');
        
    });
}