$(document).ready(function () {
    $(".bc").hover(function () {
        $(".defaultHeader").toggle();
        $(".hidden.bc").toggle();
    });
    $(".hr").hover(function () {
        $(".defaultHeader").toggle();
        $(".hidden.hr").toggle();
    });
    $(".cf").hover(function () {
        $(".defaultHeader").toggle();
        $(".hidden.cf").toggle();
    });
});