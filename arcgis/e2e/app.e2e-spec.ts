import { ArcgisPage } from './app.po';

describe('arcgis App', () => {
  let page: ArcgisPage;

  beforeEach(() => {
    page = new ArcgisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
