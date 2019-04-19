// ==UserScript==
// @name         VK Video Downloader
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    setTimeout(function repeater() {
        var divs = document.getElementsByClassName("page_post_thumb_video");
        var i;
        var swap1;
        for (i = 0; i < divs.length; i++) {
            var div = divs[i];
            var par = div.parentNode;
            var done = par.hasAttribute("addeddwldlnk");
            //console.log(i, done);
            if (done==false) {
                par.setAttribute("addeddwldlnk","done");

                var href = div.getAttribute("data-video");
                var ihm;
                ihm = "<div id='getmevideo"+i+"' style='position:absolute;  right:20px; top:0px'><a href ='https://getvideo.at/ru/?url=https://vk.com/video" + href + "' target='_blank'>--&gt; скачать &lt;-- </a></div>";
                par.innerHTML = par.innerHTML + ihm;
            } else {
             //   console.log(i, "is NOT null");
            }
        }

        var mv_title = document.getElementById('mv_title');
        if (mv_title!=null) {
            var don = mv_title.hasAttribute("addeddwldlnk");
            if (don==false) {
               var purl = window.location.href;
               console.log(window.location.href);
               mv_title.setAttribute("addeddwldlnk","done");
               mv_title.setAttribute("max-height","none");
               mv_title.innerHTML = mv_title.innerHTML+"<div id='getmevideo-one'><a href ='https://getvideo.at/ru/?url=" + purl + "' target='_blank'>--&gt; скачать &lt;-- </a></div>";
            }
        }

        setTimeout(function repeaterwrap() {
            repeater()
        }, 2000);
    }, 2000);

    // Your code here...
})();
