$(document).ready(function() {
$('td').css('cursor', 'pointer');
$("td").click(function() {
    var content = $(this).text(); 
    if (content != "Not Available"){ 
        $(this).toggleClass("tdhighlight");
        }
    });
});
