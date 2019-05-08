TweenMax.to(".woids", 4, {x:20, ease:Elastic.easeOut.config (1, .04)});

var audioplay = document.createElement('audio');
        audioplay.setAttribute('src', 'boing.wav');

TweenMax.to(".woids",5,{x:200,
    onStart:function(){audioplay.play()},
    onComplete:function(){audioplay.pause()}﻿
})