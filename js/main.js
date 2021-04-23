$(document).ready(() => {
    $('.logo-link, .menu-link').click(function(){
        // console.log('click works');
        const ID = $(this).attr('href');
        // console.log(ID);
        const OFFSET = $(ID).offset().top;
        // console.log(OFFSET);
        $('html').animate({
            scrollTop: OFFSET
        }, 1000);
    });
});