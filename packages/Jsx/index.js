/**
 * 动态加载cdn的图标资源
 */
var src = "//at.alicdn.com/t/font_1928386_wj9j9ob9u7.js";
var script_dom = document.createElement('script');
script_dom.src = src;
script_dom.language = 'javascript';
script_dom.type = 'text/javascript';
var head = document.getElementsByTagName('head').item(0); //这个是往本页面动态加载js脚本
head.appendChild(script_dom);