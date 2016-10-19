$(document).ready(function() {

  $("form").submit(function(event) {
    var nameInput = $("#name").val();
    var addressInput = $("#address").val();

    $(".customer").text(nameInput);
    $(".address").text(addressInput);

    event.preventDefault();
  });

});
