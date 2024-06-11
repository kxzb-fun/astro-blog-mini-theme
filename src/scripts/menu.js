// 使用视图过渡后，部分脚本可能在页面导航后不再像在完整页面浏览器刷新时那样重新运行。在客户端路由期间，有几个事件可以监听，并在发生时触发事件。你项目中的脚本现在需要连接到两个事件，以在页面导航期间的适当时间运行：astro:page-load和astro:after-swap。
document.addEventListener('astro:page-load', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
  });
});