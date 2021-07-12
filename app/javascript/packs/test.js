$("#btnApplyChanges").click(function (e) {
    var error = $('#confirmationPageMessage');
    var error2 = $('#redirectUrlMessage');
    var error3 = $('#logoutUrlMessage');
        
        if (($('#confirmationPage').val()) == "") {
            error.text("You must fill this field.")
            e.preventDefault();

        } else if (($('#confirmationPage').val()) != "") {
            error.text("")
        }

        if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#redirectUrl").val())){
            error2.text("");
        } else {
            error2.text("Invalid URL, some examples of valid URL's are: http://www.google.com/, https://www.google.com/, http://google.com/.");
        }

        if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#logoutUrl").val())){
            error3.text("");
        } else {
            error3.text("Invalid URL, some examples of valid URL's are: http://www.google.com/, https://www.google.com/, http://google.com/.");
        }
});