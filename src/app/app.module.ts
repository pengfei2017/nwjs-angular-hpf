import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {GlobalConfigService} from './common/service/global-config.service';
import {WinMsgService} from './common/utils/win-msg.service';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GlobalConfigService, WinMsgService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
