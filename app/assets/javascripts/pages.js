$(function(){

    var $window = $(window); 


    $('.cx-list-toggle-wrap').on('mouseup', function(){

        $(this).toggleClass('open');

        if( !$(this).hasClass('open') ){
            $(this).parent().parent().parent().addClass('off');
        } else{
            $(this).parent().parent().parent().removeClass('off');
        }

    });

    $('.menu-btn').on('click', function(){

        $('.menu').toggleClass('active');
        $(this).toggleClass('active');

    });

    $('.page-menu-btn').on('click', function(){

        $('.page-menu ul').toggleClass('active');
        //$(this).toggleClass('active');

    });

    $('.client-select').on('click', function(){

        $(this).toggleClass('active');

    });
        

});
