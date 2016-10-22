import { Angular2TwitterPage } from './app.po';

describe('angular2-twitter App', function() {
  let page: Angular2TwitterPage;

  beforeEach(() => {
    page = new Angular2TwitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
