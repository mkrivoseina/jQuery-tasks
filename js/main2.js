const changeImage = $(".main-image").find("img").attr("src");

$(".gallery-image").hover(function (a) {
    $(".main-image").find("img").attr("src",a.target.src);
}, function (a) {
    $(".main-image").find("img").attr("src",changeImage);
});