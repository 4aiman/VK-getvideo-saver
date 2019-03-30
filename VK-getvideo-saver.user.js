// ==UserScript==
// @name         VK Video Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var divs = document.getElementsByClassName("page_post_thumb_video");
    var i;
    var swap1;
    for (i = 0; i < divs.length; i++) {
        var div = divs[i];
        var par = div.parentNode;

        var href = div.getAttribute("data-video");
        var ihm;
        ihm = "<div id='getmevideo"+i+"' style='position:absolute;  right:20px; top:0px'><a href ='https://getvideo.at/ru/?url=https://vk.com/video" + href + "' target='_blank'>--&gt; скачать &lt;-- </a></div>";
        par.innerHTML = par.innerHTML + ihm;

    }

    setTimeout(function mvttl() {
    var mv_title = document.getElementById('mv_title');
    if (mv_title!=null) {
       console.log(window.location.href);
       var purl = window.location.href;
       mv_title.innerHTML = mv_title.innerHTML+"<div id='getmevideo-one'><a href ='https://getvideo.at/ru/?url=" + purl + "' target='_blank'>--&gt; скачать &lt;-- </a></div>";
    }
    }, 1000);



    // Your code here...
})();
