

// header Dropdown


$('.sMenuLink > a').on("click", function(event){
    $(this).parents('.sMenuLink').siblings().addClass('activeSMenu');
    $(this).parents('.sMenuLink').siblings().find('ul.subMenuCol').slideUp();
    $(this).parents('.sMenuLink').toggleClass('activeSMenu');
    $(this).parents('.sMenuLink').find('ul.subMenuCol').slideToggle();
  });


  $(document).on("click", function(event){
    var $trigger = $(".ddParent");
    if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".ddParent").removeClass("actDD");
    }
  });

  $('.ddCloseTrigger').on("click", function(event){
    $(".ddParent").removeClass("actDD");
  });
  

// $(document).ready( function () {
//     $('.dataTable').DataTable({
//       responsive: true,
//       pageLength: 5,
//     });
// } ); 
/////

$(".formS").on("change", ".file-upload-field", function(){
    $(this).parent(".file-upload-wrapper").attr("data-text",
    $(this).val().replace(/.*(\/|\\)/, '') );
});
