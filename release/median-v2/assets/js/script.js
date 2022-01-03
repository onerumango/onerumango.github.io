

// header Dropdown






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
