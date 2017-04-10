import {Injectable} from '@angular/core';

@Injectable()
export class GlobalConfigService {
  // 当前程序是否是在nw环境中运行
  IS_RUN_IN_NW = false;

  constructor() {
  }

}
