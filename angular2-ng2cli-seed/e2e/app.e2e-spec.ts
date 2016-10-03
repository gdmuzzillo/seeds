import { Angular2Ng2cliSeedPage } from './app.po';

describe('angular2-ng2cli-seed App', function() {
  let page: Angular2Ng2cliSeedPage;

  beforeEach(() => {
    page = new Angular2Ng2cliSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
