// ==UserScript==
// @name         一键复制阿里巴巴矢量图标库svg
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.iconfont.cn/collections/*
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @require      https://cdn.bootcss.com/clipboard.js/2.0.1/clipboard.min.js
// @grant        none
// ==/UserScript==

(function() {
    setTimeout(function () {
        $('.icon-cover').remove();
        var icon = $('.icon'),svgImg;
        $('body').on('click','svg',function () {
            this.setAttribute('data-clipboard-action','copy');
            console.log(this.innerHTML);
            var svgTag = '<svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: '+
                'currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org'+
                '/2000/svg" p-id="495" data-spm-anchor-id="a313x.7781069.1998910419.i0">';
            svgImg = svgTag + this.innerHTML + '</svg>';
            this.setAttribute('data-clipboard-text',svgImg);
            this.setAttribute('data-clipboard-target','svg');
            // 创建图片对象
            var image = new Image();
            // 给图片对象写入base64编码的svg流
            image.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgImg)));
            // 绘制画布
            var canvas = document.createElement('canvas');
            canvas.width = $(svgImg).width();
            canvas.height = $(svgImg).height();
            // 获取画布2D对象
            var context = canvas.getContext('2d');
            context.drawImage(image, 0, 0);
            // 提供下载链接
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/png');  //将画布内的信息导出为png图片数据
            a.download = "MapByMathArtSys";  //设定下载名称
           //  a.click(); //点击触发下载
        });
        var clipboard = new ClipboardJS('svg');
        clipboard.on('success', function(e) {
            console.log(e);
        });
        clipboard.on('error', function(e) {
            console.log(e);
        });

    },1000);
})();