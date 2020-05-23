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
        this.speed = 3000;
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
        $('.a-toast').remove();
        clearTimeout(this.timer);
        $('body').append('<div class="a-toast ' + addSpeedClass + ' ' + addPositionClass + '">' + message + '</div>');
        let leftpos = $('body').width()/2 - $('.a-toast').outerWidth()/2;
        $('.a-toast').css('left', leftpos).hide().fadeIn('fast');
        this.timer = setTimeout(function() {
            $('.a-toast').fadeOut('slow',function(){
                $(this).remove();
            });
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
        $('.a-toast').fadeOut('slow',function() {
            $(this).remove();
        });
    }
    return aToast;
})();