console.log("Script.js");
$(document).ready(function () {
    $("#menuid").click(function () {
        $("nav").show();
        console.log("clicked");
    })
    $("#closeid").click(function () {
        $("nav").hide();

    })
})