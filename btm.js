$('#btnGetURL').after('<input type="button" id="btnRaz" value="RàZ"/>');
$('#btnRaz').click(function(){
    $('#url').val('');
    $('#target').empty();
});