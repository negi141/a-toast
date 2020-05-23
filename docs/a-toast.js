/*
* a-toast | v0.7.0
* https://github.com/negi141/a-toast/
* by Takuto Negishi.
*/
// トースト通知クラス
const aToast = (function(){
    'use strict';
    let timer;
    let speed;
    let position;
    // コンストラクタ
    function aToast() {
        this.speed = 4000;
        this.position = 'top';
    }
    // 表示時間(speed)と、位置(top or bottom)を設定
    aToast.prototype.setOption = function(speed, position) {
        this.speed = speed;
        this.position = position;
    }
    // メッセージを表示
    aToast.prototype.show = function(message, style) {
        let addSpeedClass = (style === undefined || style === '') ? '' : 'a-toast-' + style;
        let addPositionClass = 'a-toast-pos-' + this.position;

        this.hide();

        clearTimeout(this.timer);

        let t = document.createElement("div");
        t.className = 'a-toast ' + addSpeedClass + ' ' + addPositionClass;  
        t.appendChild(document.createTextNode(message));
        document.body.appendChild(t);

        let leftpos = document.body.clientWidth/2 - t.clientWidth/2;
        t.style.left = leftpos + 'px';
        t.classList.add("a-toast-show");

        this.timer = setTimeout(function() {
            t.classList.remove("a-toast-show");
        }, this.speed);
    };
    // successのスタイルでメッセージを表示
    aToast.prototype.success = function(message) {
        this.show(message, 'success');
    }
    // warningのスタイルでメッセージを表示
    aToast.prototype.warn = function(message) {
        this.show(message, 'warn');
    }
    // dangerのスタイルでメッセージを表示
    aToast.prototype.danger = function(message) {
        this.show(message, 'danger');
    }
    // 明示的にメッセージを消したい場合は使う
    aToast.prototype.hide = function() {        
        let old = document.getElementsByClassName('a-toast');
        for (let i = 0; i < old.length; ++i) {
            old[i].parentNode.removeChild(old[i]);
        }
    }
    return aToast;
})();