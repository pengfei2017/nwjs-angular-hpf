import {Component, OnInit} from '@angular/core';

import {WinMsgType} from './common/enum/win-msg-type.enum';
import {WinMsgService} from './common/utils/win-msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  content = 'app works!';

  constructor(public win_msg_service: WinMsgService) {

  }

  ngOnInit() {
    this.win_msg_service.addMessageEventListener();
  }

  minimizeApp() {
    this.win_msg_service.sendMsg(WinMsgType.MinimizeWindow);
  }

  closeApp() {
    this.win_msg_service.sendMsg(WinMsgType.CloseWindow);
  }

}
