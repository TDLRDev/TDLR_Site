$(document).ready(init);

function init()
{
    
    $('#fullpage').fullpage({
        verticalCentered: false,
        anchors: ['homePage', 'pageJeu', 'pageNews', 'pageHistoire', 'PageNous'],
	    menu: '#myMenu'
    });
    
    
    // au clique sur la section le text et les images changent
    $('#niveauUn li').click(function(){
        var to_show = $(this).attr('desc'); // je recupere le nom de reference qui sera commum a un texte, une image 
        //var maListe = $('#menuDescription');
        
        $('#description article img').each(function(){
            if ($(this).attr('desc') == to_show) 
            {
                $(this).attr('class', 'imageMinActive');
            }
            else
            {
                $(this).attr('class', 'imageMinInactive');    
            }
        });
        
        $('#description article p').each(function(){
            if ($(this).attr('desc') == to_show) 
            {
                $(this).attr('class', 'textActif');
            }
            else
            {
                $(this).attr('class', 'textInactif');    
            }
        });
        
    });  
}