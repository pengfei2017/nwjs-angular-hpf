/**
 * Created by admin on 2017/4/8.
 */
//nw主窗口获取nw.js的本地库
var nw_gui = require('nw.gui');

//nw主窗口获取整个package.json中的配置文件对象
var nw_app = nw_gui.App;
var manifest = nw_app.manifest;

//定义父子窗口间通信的消息类型
const WinMsgType = {
  MinimizeWindow: 0,
  CloseWindow: 1
};

/**
 * nw主窗口页面加载完毕的事件
 */
window.onload = function () {
  //向子窗口发送消息 系统初始化完成（加载数据动画消失）
  window.frames["main-view"].postMessage("系统初始化完成,关闭加载数据动画", manifest.node_remote);
};

/**
 * nw主窗口处理angular子窗口发来的消息
 */
window.addEventListener('message', function (event) {
  if (event.data === WinMsgType.MinimizeWindow) {
    minimizeWindow();
  } else if (event.data === WinMsgType.CloseWindow) {
    closeWindow();
  }
}, false);

/**
 * nw主窗口最小化整个应用程序
 */
function minimizeWindow() {
  var nw_win = nw_gui.Window.get();
  nw_win.minimize();
}

/**
 * nw主窗口关闭整个应用程序
 */
function closeWindow() {
  var nw_win = nw_gui.Window.get();
  nw_win.close(true);
}

