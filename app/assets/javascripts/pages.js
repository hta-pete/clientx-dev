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

    $(document).on('click','.menu-btn', function(){

        $('.menu').toggleClass('active');
        $(this).toggleClass('active');

    });

    $(document).on('click','.page-menu-btn', function(){

        $('.page-menu ul').toggleClass('active');

    });

    $(document).on('click','.client-select', function(){

        $(this).toggleClass('active');

    });
        

});
