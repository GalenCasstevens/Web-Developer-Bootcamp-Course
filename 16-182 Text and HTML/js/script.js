$("button").click(function() {
  alert($(this).text());
});

$("input").keypress(function(event) {
  if(event.which === 13) {
    $(this).val("shut up");
  }
});
