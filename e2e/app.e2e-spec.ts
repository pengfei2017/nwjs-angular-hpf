import { WeAppTellerPage } from './app.po';

describe('we-app-teller App', () => {
  let page: WeAppTellerPage;

  beforeEach(() => {
    page = new WeAppTellerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
