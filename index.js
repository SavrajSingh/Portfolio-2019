$( document ).ready(function() {

    $("a[href='#about']").click(function() {
        $('html, body').animate({
            scrollTop: $('.about').offset().top - 20}, 'slow');
    });

});
