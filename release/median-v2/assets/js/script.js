

// header Dropdown


$('.sMenuLink > a').click(function(){
    $(this).parents('.sMenuLink').siblings().addClass('activeSMenu');
    $(this).parents('.sMenuLink').siblings().find('ul.subMenuCol').slideUp();
    $(this).parents('.sMenuLink').toggleClass('activeSMenu');
    $(this).parents('.sMenuLink').find('ul.subMenuCol').slideToggle();
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
