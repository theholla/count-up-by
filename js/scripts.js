

$(document).ready(function() {
  $("form#count-up-to").submit(function(event) {
    var countTo = $("input#countTo").val();
    var countBy = $("input#countBy").val();

    $(".output").number(output);

    $("#result").show();
    event.preventDefault();
  });
});
