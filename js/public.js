(function (doc, win) {
    var _root = doc.documentElement,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
        resizeCallback = function () {
            var clientWidth = _root.clientWidth,
                fontSize = 20;
            if (!clientWidth) return;
            if(clientWidth < 750) {
                fontSize = 20 * (clientWidth / 375);
            } else {
                fontSize = 20 * (750 / 375);
            }
            _root.style.fontSize = fontSize + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, resizeCallback, false);
    doc.addEventListener('DOMContentLoaded', resizeCallback, false);
})(document, window);


var baseurl='http://192.168.1.128/';
