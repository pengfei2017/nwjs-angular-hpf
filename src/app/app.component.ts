import {Component, OnInit} from '@angular/core';
import {WinMsgType} from './common/enum/win-msg-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  content = 'app works!';

  ngOnInit() {

  }

  minimizeApp() {
    window.parent.postMessage(WinMsgType.MinimizeWindow, '*');
  }

  closeApp() {
    window.parent.postMessage(WinMsgType.CloseWindow, '*');
  }

}
