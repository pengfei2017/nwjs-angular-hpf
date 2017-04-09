/**
 * Created by admin on 2017/4/9.
 */
/**
 * angular子窗口处理nw主窗口发送来的消息
 */
window.addEventListener("message", function (event) {
  if (event.data.type != "webpackOk") {
    //关闭加载数据动画
    alert(event.data);
  }
}, false);
