import { PhoneappPage } from './app.po';

describe('phoneapp App', () => {
  let page: PhoneappPage;

  beforeEach(() => {
    page = new PhoneappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
