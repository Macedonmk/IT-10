$(function() {
        $('#wrapperLisa').dialog({
        autoOpen: false,
        title: 'Details'
});
    $('#openerLisa').click(function() {
        $('#wrapperLisa').dialog('open');
        return false;
});
    $('#wrapperTom').dialog({
        autoOpen: false,
        title: 'Details'
});
    $('#openerTom').click(function() {
        $('#wrapperTom').dialog('open');
        return false;
});
    $("#deleteLisa").on('click', function(event) {
	$(this).parent().parent().remove();
});
    $("#deleteTom").on('click', function(event) {
	$(this).parent().parent().remove();
});
  $("tr").hover(
  function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  }
);
  
$("#addNew").click(function () {
    
    var newRow = '<tr> <td></td></tr>';
    $('#myTable tr:last').after(newRow);
});

    
});