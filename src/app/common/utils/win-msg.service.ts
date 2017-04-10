import {Injectable} from '@angular/core';

import {WinMsgType} from '../enum/win-msg-type.enum';
import  {GlobalConfigService} from '../service/global-config.service';

@Injectable()
export class WinMsgService {

  constructor(public global_config_service: GlobalConfigService) {
  }

  /**
   * 注册事件，监听nw主窗口的消息
   */
  public addMessageEventListener() {
    /**
     * 注册事件，angular子窗口处理nw主窗口发送来的消息
     */
    window.addEventListener('message', (event) => {
      if (event.data === WinMsgType.InitNW) {
        this.global_config_service.IS_RUN_IN_NW = true;
      }
    }, false);
  }

  /**
   * 向nw主窗口发送事件消息
   * @param win_msg_type
   */
  public sendMsg(win_msg_type) {
    if (this.global_config_service.IS_RUN_IN_NW) {
      window.parent.postMessage(win_msg_type, '*');
    } else {
      alert("成功触发" + WinMsgType[win_msg_type] + "类型的事件：具体效果请在nwjs环境中运行查看");
    }
  }

}
