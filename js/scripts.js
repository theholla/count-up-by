var countUp = function(howHigh, byWhat) {
  var numberArray = [];

  if (howHigh % byWhat === 0) {
    for (var i = 1; i <= howHigh; i++) {
      if (i % byWhat === 0) {
        numberArray.push(" " + i);
      }
    }
    return numberArray;
  } else {
    var sorry = "You can't count to " + howHigh + " by " + byWhat +
    "'s! Try another number, please.";
    return sorry;
  }
}

$(document).ready(function() {
  $("form#count-up-by").submit(function(event) {
    var howHigh = parseInt($("input#countTo").val());
    var byWhat = parseInt($("input#countBy").val());
    var output = countUp(howHigh, byWhat);

    $(".countTo").text(howHigh);
    $(".countBy").text(byWhat);
    $(".output").text(output);

    $("#result").show();
    event.preventDefault();
  });
});
