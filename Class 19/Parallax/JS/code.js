$(document).ready(function(){ /* Aplicarle lo que está en la función a TODO el documento. */
    $window = $(window);

    $('#intro').height($window.height()); /* Que #intro sea responsive. */
    $window.scroll(function(){
        $('div.background').each(function(index,item){
            let $scroll = $(item);
            let yPos = -($window.scrollTop()/$scroll.data('speed'));
            let coords = '50%' + yPos + 'px';
            $scroll.css({backgroundPosition: coords});
        })
    })
})