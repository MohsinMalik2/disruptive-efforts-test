/* Initializations */
$(document).ready(function(){

    $(".hover-content").hide();
    $(".exampleRadios1").css('color','red');
    $(".exampleRadios1").css('border-color','red');
    $(".exampleRadios2 span").css('display','none');
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        autoPlay:false,
        navigationText:["<div class='prev-slide'> <i class='pr-0 fa fa-chevron-left'></i></div>","<div class='next-slide'><i class='pr-0 fa fa-chevron-right'></i></div>"],
        responsive:{
            600:{
                items:1,
            }
        }
    });

});


/*Check Boxes */
$("input[name='exampleRadios']").change(function(){
    // Do something interesting here
    let id= $(this).attr("id");
    if(id == "exampleRadios2"){
        $(".exampleRadios2").css('color','red');
        $(".exampleRadios1").css('color','grey');
        $(".exampleRadios1 span").css('display','none');
        $(".exampleRadios2 span").css('display','block');
        $(".exampleRadios2").css('border-color','red');
        $(".exampleRadios1").css('border-color','grey');

    }
    else{
        $(".exampleRadios1").css('color','red');
        $(".exampleRadios2").css('color','grey');
        $(".exampleRadios2 span").css('display','none');
        $(".exampleRadios1 span").css('display','block');
        $(".exampleRadios1").css('border-color','red');
        $(".exampleRadios2").css('border-color','grey');

    }
});

/* Owl Carousal Customization */

$(".testimonial-item").mouseover(function(){
    $(this).find(".hover-content").show();
});
$(".testimonial-item").mouseout(function(){
    $(".hover-content").hide();
});

