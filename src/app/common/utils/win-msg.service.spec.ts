import { TestBed, inject } from '@angular/core/testing';

import { WinMsgService } from './win-msg.service';

describe('WinMsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WinMsgService]
    });
  });

  it('should ...', inject([WinMsgService], (service: WinMsgService) => {
    expect(service).toBeTruthy();
  }));
});
