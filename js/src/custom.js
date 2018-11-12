/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "/images/155.jpg",
          "/images/168.jpg"
    ], { duration: 60000, fade: 1500 });  
});

/* 背景图片透明度 */
.backstretch {
    opacity: .75;
}

/* 页面透明度 */
.content-wrap, .sidebar {
    opacity: .9 !important;
}
.header-inner {
    background: rgba(255, 255, 255, 0.9) !important;
}
