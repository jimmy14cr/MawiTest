$(document).on('click', '#btnApplyChanges', function (e) {
    var error = $('#confirmationPageMessage');

        if (($('#confirmationPage').val()) == "") {
            error.text("You must fill this field.")
            e.preventDefault();
        } else if (($('#confirmationPage').val()) != "") {
            error.text("")
        }
});