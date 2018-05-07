//Hide the uppercase keyboard when page first loads
$('#keyboard-upper-container').hide();

//Shift to toggle bewteen uppercase and lowercase

$(document).keydown(function (e) {
    if (e.which == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
    $(document).keyup(function (e) {
        if (e.which == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }
    });
});