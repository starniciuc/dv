if ($(".banner-slider").length) {
    $(".banner-slider").bxSlider();
}

if ($(".slider-partner").length) {
    $(".slider-partner").bxSlider({
        pager: false,
        infiniteLoop: true,
        minSlides: 2,
        maxSlides: 2,
        mode: 'vertical'
    });
}
$("#upload").change(function () {
    var fullPath = document.getElementById('upload').value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        $("#file").html("Загружено " + filename);
    }
});
function goScroll(a) {
    if (a != 0) {
        $('html, body').animate({scrollTop: $("#" + a).offset().top - 115}, 1000);
    } else {
        $('html, body').animate({scrollTop: 0}, 1000);
    }

}
$('#slider').on('shown.bs.modal', function() {
    $(".modal-slider").bxSlider({
        pager: false
    }
    );
});