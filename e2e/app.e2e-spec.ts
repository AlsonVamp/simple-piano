import { Angularattack2017SimplicityPage } from './app.po';

describe('angularattack2017-simplicity App', () => {
  let page: Angularattack2017SimplicityPage;

  beforeEach(() => {
    page = new Angularattack2017SimplicityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
