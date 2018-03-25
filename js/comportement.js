$(document).ready(init);

function init()
{
    
    $('#fullpage').fullpage({
        verticalCentered: false,
        anchors: ['homePage', 'pageJeu', 'pageNews', 'pageHistoire', 'PageNous'],
	    menu: '#myMenu'
    });
    
    
    $('.niveauDeux li').click(function(e){
        var to_show = $(this).attr('desc'); // je recupere le nom de reference qui sera commum a un texte, une image 
        
        $('img[desc="'+to_show+'"').attr('class', 'imageMinActive');
        $('img[desc="'+to_show+'"').siblings().attr('class', 'imageMinInactive');
        
        $('p[desc="'+to_show+'"').attr('class', 'textActif');
        $('p[desc="'+to_show+'"').siblings().attr('class', 'textInactif');
        
        $('table[desc="'+to_show+'"').attr('class', 'tableauActif');
        $('table[desc="'+to_show+'"').siblings().attr('class', 'tableauInactif');
    });    
}