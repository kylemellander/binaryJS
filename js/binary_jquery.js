$(document).ready(function(){
  $("form").submit(function(event){
    var number = parseInt($("#number").val());
    var arg = parseInt($("#arg").val());
    var result = numberConverter(number, arg);

    $("#results").text(result);
    $("#results").show();
    event.preventDefault();
  });
});
