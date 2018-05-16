
$(function () {

    $('.tag-close').click(function() {
        $(this).parents('.tag').fadeOut(100, function(){
                $(this).parents('.tag').remove();
        });
        $(this).parents('.tag-contact').fadeOut(100, function(){
            $(this).parents('.tag').remove();
        });
    });
});