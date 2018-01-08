// Zmiana "opacity" ekranu początkowego podczas scrollowania.

var $doc = $(document);
var $header = $("header");
var $title = $("#title")

$doc.on("scroll", function () {
  var scrollPos = $doc.scrollTop();
  var sectionOffset = $title.offset().top;
  if (scrollPos < sectionOffset) {
    $header.css("opacity", 1 - 1.23 * scrollPos / sectionOffset);
  }
});
