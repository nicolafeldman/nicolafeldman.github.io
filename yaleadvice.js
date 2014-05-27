var thanks_string = "Thanks for your advice! We will review all submissions and post appropriate advice within several days.";

$("#button").click(function () {
    $("#newloc").val('');
    $("#newdate").val('');
    $("#newadv").val('');
    $("#thanks").append(thanks_string); } )

$(function () {
    $('#chem').hover(function () {
        $('#chemA').show();
    }, function () {
        $('#chemA').hide();
    });
});

$(function () {
    $('#kbt').hover(function () {
        $('#kbtA').show();
    }, function () {
        $('#kbtA').hide();
    });
});

$(function () {
    $('#flu').hover(function () {
        $('#fluA').show();
    }, function () {
        $('#fluA').hide();
    });
});

$(function () {
    $('#slifka').hover(function () {
        $('#slifkaA').show();
    }, function () {
        $('#slifkaA').hide();
    });
});

$(function () {
    $('#taps').hover(function () {
        $('#tapsA').show();
    }, function () {
        $('#tapsA').hide();
    });
});

$(function () {
    $('#toads').hover(function () {
        $('#toadsA').show();
    }, function () {
        $('#toadsA').hide();
    });
});

$(function () {
    $('#hair').hover(function () {
        $('#hairA').show();
    }, function () {
        $('#hairA').hide();
    });
});