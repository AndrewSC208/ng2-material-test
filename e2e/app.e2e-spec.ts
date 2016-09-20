import { Ng2MaterialTestPage } from './app.po';

describe('ng2-material-test App', function() {
  let page: Ng2MaterialTestPage;

  beforeEach(() => {
    page = new Ng2MaterialTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
