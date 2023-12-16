$(function() {
    $("img.lazy").lazyload({
        threshold: 20000,
        failure_limit: 10,
        placeholder: "../load.gif",
        effect: "fadeIn"
    });
});