﻿siteRoot = 'http://localhost:61071';

var getParameterByName =  function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var create_options = function(data) {
    var html = "";
    $.each(data, function (idx, obj) {
        html += "<option value=\"" + obj.value + "\">" + obj.name + "</option>\n";
    });
    return html;
}

var get_questions = function (controlId) {

}